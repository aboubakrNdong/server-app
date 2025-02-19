import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusClassPipe } from './pipes/status-class.pipe';
import { StatusTextPipe } from './pipes/status-text.pipe';
import { ServerComponent } from './components/server/server.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarServerComponent } from './components/navbar-server/navbar-server.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusClassPipe,
    StatusTextPipe,
    ServerComponent,
    NavbarServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
