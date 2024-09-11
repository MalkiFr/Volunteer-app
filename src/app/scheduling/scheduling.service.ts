import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Volunteer } from '../volunteer/volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  _myURL = 'http://localhost:5141/api/';
   
  constructor(private http: HttpClient) { }

  getScheduling = (): Observable<number[]> => {
    return this.http.get<number[]>(this._myURL + "Scheduling")
  }

  saveScheduling = (schedule: number[]): Observable<number[]> => {
    return this.http.put<number[]>(this._myURL + "Scheduling/Put", schedule);
  }

  // getAllVolunteers(): Observable<Volunteer[]> {
  //   return this.http.get<Volunteer[]>(this._myURL + 'Volunteer/Get');
  // }
}

