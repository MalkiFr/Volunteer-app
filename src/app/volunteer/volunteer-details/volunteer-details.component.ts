import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.scss']
})
export class VolunteerDetailsComponent implements OnInit {
  currentVol!: Volunteer;
  daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  volunteerForm: FormGroup= new FormGroup({});
  volunteerId!: number;
  value: string = '';
  selectedDays: string[] = [];
  availableDays: { [key: string]: boolean } = {};

  constructor(
    private fb: FormBuilder,
    private volunteerService: VolunteerService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.volunteerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]],
      days: this.fb.array(this.daysOfWeek.map(() => new FormControl(false))) // Initialize with false
    });
  }

  ngOnInit(): void {
    this.volunteerId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadVolunteer();
  }

  get days(): FormArray {
    return this.volunteerForm.get('days') as FormArray;
  }

  private loadVolunteer() {
    this.volunteerService.getVolunteerById(this.volunteerId).subscribe({
      next: (data: Volunteer) => {
        // Patch the form values for fullName and phone
        this.volunteerForm.patchValue({
          fullName: data.fullName,
          phone: data.phone
        });

        // Map data.days to the days FormArray
        const daysArray = this.daysOfWeek.map(day => data.days.includes(day));

        // Update the FormArray with the correct values
        this.updateDays(daysArray);
      },
      error: err => {
        console.error('Error loading volunteer', err);
        // Handle error
      }
    });
  }

  private updateDays(daysArray: boolean[]) {
    const daysControls = this.days.controls;
    daysArray.forEach((checked, index) => {
      daysControls[index].setValue(checked);
    });
  }

  onSave = () => {
    if (this.volunteerForm!.valid) {
      let volunteer = new Volunteer();
      volunteer.days = this.currentVol.days;
      if (this.currentVol)
      volunteer.id = this.currentVol.id;
      volunteer.fullName = this.volunteerForm?.value.name;
      // volunteer.address = this.volunteerForm.value.address;
      volunteer.phone = this.currentVol.phone;
      this.volunteerService.vol = volunteer;
      this.volunteerService.updateVolunteer().subscribe(result => {
        if (<boolean>result)
          this.router.navigate(["/VolunteerList"]);

        else
          alert("this volunteer has no days");
      })
      this.router.navigate(["/VolunteerList"]);
    }

  }




}
