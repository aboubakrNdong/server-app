import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { Status } from 'src/app/enum/status.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { ServerService } from 'src/app/service/server.service';



@Component({
  selector: 'app-server-modal',
  templateUrl: './server-modal.component.html',
  styleUrls: ['./server-modal.component.css']
})
export class ServerModalComponent  {

  appState$: Observable<AppState<CustomResponse>> | undefined;
  readonly DataState = DataState;
  readonly Status = Status;

  constructor(private serverService: ServerService,) {

  }


}
