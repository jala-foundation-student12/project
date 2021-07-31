import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { DiscoverComponent } from './discover/discover.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'profile', 
    component: PagesComponent,
    canActivate: [LoginGuard], // at the moment
    children: [
        {path: 'contacts', component: ContactsComponent},
        {path: 'notifications', component: NotificationsComponent},
        {path: 'discover', component: DiscoverComponent},
        {path: '', component: ProfileComponent},
    ]
  },
//   {path: 'notifications', component: NotificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }