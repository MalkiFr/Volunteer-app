import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';



@NgModule({
  declarations: [
    SchedulingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SchedulingComponent]
})
export class SchedulingModule {
  
  
}
