import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { VolunteerService } from './volunteer.service';



@NgModule({
  declarations: [
    VolunteerListComponent,
    VolunteerDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [VolunteerDetailsComponent, VolunteerListComponent]
})
export class VolunteerModule { }
