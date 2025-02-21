import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, catchError, map, Observable, startWith, of } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { Status } from 'src/app/enum/status.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { Server } from 'src/app/interface/server';
import { ServerService } from 'src/app/service/server.service';


@Component({
  selector: 'add-server-modal',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {

  appState$: Observable<AppState<CustomResponse | null>> | undefined;

  readonly DataState = DataState;
  readonly Status = Status;

  private dataSubject = new BehaviorSubject<CustomResponse | null>(null);

  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  constructor(private serverService: ServerService) { }


  saveServer(serverForm: NgForm): void {
    this.isLoading.next(true);
    this.appState$ = this.serverService.saveServer$(serverForm.value as Server)
      .pipe(
        map(response => {
          if (response.data.server) {
            this.dataSubject.next({
              ...response,
              data: {
                servers: [response.data.server, ...(this.dataSubject.value?.data.servers ?? [])]
              }
            });
            this.isLoading.next(false);
            serverForm.resetForm({ status: this.Status.SERVER_DOWN });
          }
          return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value };
        }),
        startWith({ dataState: DataState.LOADED_STATE, appData: this.dataSubject.value }),
      catchError(error => this.handleErrorSave(error))
    );
  }

  

  private handleErrorSave(error: string): Observable<AppState<CustomResponse | null>> {
    this.isLoading.next(false);
    return of({ dataState: DataState.ERROR_STATE, appData: null, error });
  }

}
