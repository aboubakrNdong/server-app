import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { Status } from 'src/app/enum/status.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';


@Component({
  selector: 'add-server-modal',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent {

  appState$: Observable<AppState<CustomResponse>> | undefined;
  readonly DataState = DataState;
  readonly Status = Status;

  constructor() {

  }

}
