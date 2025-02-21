import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enum/data-state.enum';
import { Status } from 'src/app/enum/status.enum';
import { AppState } from 'src/app/interface/app-state';
import { CustomResponse } from 'src/app/interface/custom-response';


@Component({
  selector: 'app-navbar-server-show',
  templateUrl: './navbar-server.component.html',
  styleUrls: ['./navbar-server.component.css']
})
export class NavbarServerComponent {

  appState$: Observable<AppState<CustomResponse>> | undefined;
  readonly DataState = DataState;
  readonly Status = Status;

  constructor(private router: Router) {
  }

  goToModal() {
    this.router.navigate(['addserver']);
  }

}
