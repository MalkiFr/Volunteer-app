import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Volunteer } from './volunteer.model'


@Injectable(
  {
    providedIn: 'root'
  }
)
export class VolunteerService {

  readonly _myAllowSpecificOrigins = 'http://localhost:5141/api/';
  private volunteersSubject = new BehaviorSubject<Volunteer[]>([]);
  volunteers$ = this.volunteersSubject.asObservable();
  vol?: Volunteer | undefined;

  constructor(private http: HttpClient) {
    this.loadAllVolunteers();
   }

   loadAllVolunteers(): void{
    this.http.get<Volunteer[]>(this._myAllowSpecificOrigins + 'Volunteer/Get')
    .subscribe(
      volunteers => this.volunteersSubject.next(volunteers),
      err => console.error('Failed to load volunteers', err)
    );
  }

  getVolunteerById(id: number): Observable<Volunteer> {
    return this.http.get<Volunteer>(this._myAllowSpecificOrigins + `Volunteer/Get/${id}`);
  }

  updateVolunteer(updatedVolunteer: Volunteer): Observable<Boolean> {
    this.vol=updatedVolunteer;
    return this.http.put<boolean>(this._myAllowSpecificOrigins + `Volunteer/Put`, this.vol);
  }



  
}

