import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignModalComponent } from './sign-modal/sign-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ SignModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SignModalComponent
  ]
})
export class ComponentsModule { }
