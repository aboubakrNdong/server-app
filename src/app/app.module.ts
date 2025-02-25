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
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AddServerComponent } from './components/add-server/add-server.component';
import { NotificationModule } from './notification.module';
import { NotifierModule } from 'angular-notifier';



@NgModule({
  declarations: [
    AppComponent,
    StatusClassPipe,
    StatusTextPipe,
    ServerComponent,
    NavbarServerComponent,
    AddServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule,
    NotificationModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
