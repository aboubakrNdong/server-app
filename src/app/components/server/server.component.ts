import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { BehaviorSubject, catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { Status } from 'src/app/enum/status.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { NotificationService } from 'src/app/service/notification.service';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  appState$: Observable<AppState<CustomResponse | null>> | undefined;

  readonly DataState = DataState;
  readonly Status = Status;

  private filterSubject = new BehaviorSubject<String>('');
  private dataSubject = new BehaviorSubject<CustomResponse | null>(null);
  filterStatus$ = this.filterSubject.asObservable();

  constructor(private serverService: ServerService,
    // private notifier: NotifierService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.loadServers();
  }

  private loadServers(): void {
    this.appState$ = this.serverService.getServer$
      .pipe(
        map(response => this.handleServerResponse(response)),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError(error => this.handleError(error))
      );
  }

  private handleServerResponse(response: CustomResponse): AppState<CustomResponse | null> {
    this.notification.onDefault(response.message);

    this.dataSubject.next(response);
    // this.notifier.notify('success', 'You are awesome! I mean it!');

    return {
      dataState: DataState.LOADED_STATE, appData: {
        ...response, data:
          { servers: response.data.servers?.reverse() }
      }
    };
  }

  private handleError(error: string): Observable<AppState<CustomResponse | null>> {
    this.notification.onError(error);
    return of({ dataState: DataState.ERROR_STATE, appData: null, error });
  }

  pingServer(ipAddress: string): void {
    this.filterSubject.next(ipAddress);
    this.appState$ = this.serverService.pingServer$(ipAddress)
      .pipe(
        map(response => this.updateServerStatus(response)),
        startWith({ dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }),
        catchError(error => this.handleError(error))
      );
  }

  private updateServerStatus(response: CustomResponse): AppState<CustomResponse | null> {
    const servers = this.dataSubject.value?.data.servers ?? [];
    const index = servers.findIndex(server => server.id === response.data.server?.id);
    if (index >= 0) {
      servers[index] = response.data.server ?? servers[index];
    }
    this.filterSubject.next('');
    return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value };
  }


  deleteServer(ipAddress: string): void {
    this.filterSubject.next(ipAddress);
    this.appState$ = this.serverService.pingServer$(ipAddress)
      .pipe(
        map(response => this.updateServerStatus(response)),
        startWith({ dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }),
        catchError(error => this.handleError(error))
      );
  }



}

