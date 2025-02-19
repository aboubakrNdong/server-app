import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerModalComponent } from './components/server-modal/server-modal.component';
import { ServerComponent } from './components/server/server.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ServerComponent },
  { path: 'showmodal', component: ServerModalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }
