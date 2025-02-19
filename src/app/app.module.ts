import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusClassPipe } from './pipes/status-class.pipe';
import { StatusTextPipe } from './pipes/status-text.pipe';
import { ServerModalComponent } from './components/server-modal/server-modal.component';
import { ServerComponent } from './components/server/server.component';
import { ServerShowComponent } from './components/server-show/server-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    StatusClassPipe,
    StatusTextPipe,
    ServerModalComponent,
    ServerComponent,
    ServerShowComponent,
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
