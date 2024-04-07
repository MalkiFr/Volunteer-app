import { Component, Input } from '@angular/core';
import { Volunteer } from './volunteer/volunteer.model';


@Component({
  selector: ' app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  values="";
  onKey(event:any){
    this.values+=event.target.value+'|'
  }




}
