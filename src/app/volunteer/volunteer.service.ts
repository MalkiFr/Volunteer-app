import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Volunteer } from './volunteer.model'


@Injectable(
  {
    providedIn: 'root'
  }
)
export class VolunteerService {

  _myAllowSpecificOrigins = 'http://localhost:5141/api/';

  constructor(private http: HttpClient) { }

  vol?: Volunteer | undefined;

  getAllVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(this._myAllowSpecificOrigins + 'Volunteer/Get');
  }

  getVolunteerById(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(this._myAllowSpecificOrigins + `Volunteer/Get/${id}`);
  }

  updateVolunteer(updatedVolunteer: Volunteer): Observable<Boolean> {
    this.vol=updatedVolunteer;
    return this.http.put<boolean>(this._myAllowSpecificOrigins + `Volunteer/Put`, this.vol);
  }



  
}

