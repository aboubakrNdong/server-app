import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { Status } from 'src/app/enum/status.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';
import { ServerService } from 'src/app/service/server.service';


@Component({
  selector: 'app-server-show',
  templateUrl: './server-show.component.html',
  styleUrls: ['./server-show.component.css']
})
export class ServerShowComponent implements OnInit {

  appState$: Observable<AppState<CustomResponse>> | undefined;
  readonly DataState = DataState;
  readonly Status = Status;

  constructor(private serverService: ServerService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.appState$ = this.serverService.server$
      .pipe(
        map(response => {
          return { dataState: DataState.LOADED_STATE, appData: response }
        }),
        startWith({ dataState: DataState.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dataState: DataState.ERROR_STATE, error })
        })
      );
  }

  goToModal(){
    console.log("you have clicked me");
    this.router.navigate(['showmodal']);
  }

}
