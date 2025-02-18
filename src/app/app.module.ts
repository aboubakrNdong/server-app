import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusClassPipe } from './pipes/status-class.pipe';
import { StatusTextPipe } from './pipes/status-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StatusClassPipe,
    StatusTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
