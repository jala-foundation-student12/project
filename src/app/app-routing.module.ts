import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
// import { PagesComponent } from './pages/pages.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: 'home', component: StartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: 'asas', component: PagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
