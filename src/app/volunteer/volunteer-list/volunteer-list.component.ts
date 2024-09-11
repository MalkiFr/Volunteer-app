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
  
  displayedColumns: string[] = ['name','address', 'phone', 'actions'];
  volunteerList: Volunteer[] = [];

  constructor(private _service: VolunteerService, private route: Router) { }

  vol?: Volunteer | undefined;

  ngOnInit(): void {
    this._service.volunteers$.subscribe(vol => this.volunteerList =
      vol,err=>{console.log(err)});
  };

  
  editVolunteer = (id:number) => {
    this.route.navigate(["/volunteerDetails",id]);
  }




}






