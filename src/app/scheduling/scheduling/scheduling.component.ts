import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchedulingService } from '../scheduling.service';
import { VolunteerService } from 'src/app/volunteer/volunteer.service';
import { Volunteer } from 'src/app/volunteer/volunteer.model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  scheduleForm: FormGroup;
  daysArray: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  volunteersArray: Volunteer[] = [];

  constructor(private sceduleService: SchedulingService, private volService: VolunteerService, private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      days: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadVolunteers();
    this.addDays();
  };

  loadVolunteers(): void {
    this.volService.volunteers$.subscribe(vol => this.volunteersArray =
      vol, err => { console.log(err) });
  }

  getVolunteersByDay(day: number) {
    return this.volunteersArray.filter(v => v.days[day] == true);
  }

  get days(): FormArray {
    return this.scheduleForm.get('days') as FormArray;
  }

  addDays(): void {
    this.daysArray.forEach(day => {
      const dayGroup = this.fb.group({
        name: [day],
        volunteer: [null],
        selected: [false]
      });
      this.days.push(dayGroup);
    });
  }

}

