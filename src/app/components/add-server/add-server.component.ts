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
        map(response => this.handleSaveResponse(response, serverForm)),
        startWith(this.getInitialAppState()),
        catchError(error => this.handleErrorSave(error))
      );
  }

  private handleSaveResponse(response: CustomResponse, serverForm: NgForm): AppState<CustomResponse | null> {
    if (response.data.server) {
      this.updateDataSubject(response);
      this.resetForm(serverForm);
    }
    return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value };
  }

  private updateDataSubject(response: CustomResponse): void {
    this.dataSubject.next({
      ...response,
      data: {
        servers: [response.data.server as Server, ...(this.dataSubject.value?.data.servers ?? [])]
      }
    });
  }

  private resetForm(serverForm: NgForm): void {
    this.isLoading.next(false);
    serverForm.resetForm({ status: this.Status.SERVER_DOWN });
  }

  private getInitialAppState(): AppState<CustomResponse | null> {
    return { dataState: DataState.LOADED_STATE, appData: this.dataSubject.value };
  }

  private handleErrorSave(error: string): Observable<AppState<CustomResponse | null>> {
    this.isLoading.next(false);
    return of({ dataState: DataState.ERROR_STATE, appData: null, error });
  }

}
