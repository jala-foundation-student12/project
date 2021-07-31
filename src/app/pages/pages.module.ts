import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';
import { DiscoverComponent } from './discover/discover.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    PagesComponent,
    NotificationsComponent,
    DiscoverComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    ProfileComponent,
    PagesComponent,
    NotificationsComponent,
    DiscoverComponent,
    ContactsComponent,
  ]
})
export class PagesModule { }
