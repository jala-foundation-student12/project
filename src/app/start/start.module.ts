import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { StartComponent } from './start.component';



@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [ StartComponent]
})
export class StartModule { }
