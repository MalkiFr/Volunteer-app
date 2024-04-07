import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';


@Component({
  
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent {

  volunteerList: Volunteer[] = [];

  constructor(private _service: VolunteerService, private route: Router) {
    
   }

  selectVolunteer?: Volunteer | undefined;

  ngOnInit(): void {
    this._service.getAllVolunteers().subscribe(vol => this.volunteerList =
      vol)
  };

  
  editVolunteer = (volunteerToEdit: Volunteer) => {
    this.selectVolunteer = volunteerToEdit;
    console.log("edit volunteer");
  }




}



// getAllVolunteers() {
//   this._service.getAllVolunteers().subscribe(val => this.volunteerList = val);
// }


