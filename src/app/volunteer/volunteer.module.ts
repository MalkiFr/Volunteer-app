import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { VolunteerService } from './volunteer.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ VolunteerListComponent, VolunteerDetailsComponent ],
  imports: [ CommonModule ,ReactiveFormsModule],
  exports: [ VolunteerDetailsComponent, VolunteerListComponent ],
  providers: [ VolunteerService]
})
export class VolunteerModule { }
