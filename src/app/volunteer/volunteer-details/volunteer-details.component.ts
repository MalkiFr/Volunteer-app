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
  daysArray: string[] = ["Sunday", "Monday", "Teusday", "Wendsday", "Thursday", "Friday"];
  volunteerForm: FormGroup;
  volunteerId?: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private volunteerService: VolunteerService,
    private fb: FormBuilder
  ) {
    this.volunteerForm = this.fb.group({
      name: ['', Validators.required],
      availableDays: this.fb.group(
        this.daysArray.reduce((acc, day) => {
          acc[day] = [false];
          return acc;
        }, {} as { [key: string]: any })

      )
    })
  }

  ngOnInit(): void {

    this.volunteerId = this.route.snapshot.paramMap.get('id')!;
    this.volunteerService.getVolunteerById(+this.volunteerId).subscribe((volunteer) => {
      if (volunteer) {
        this.currentVol = volunteer;
        const availableDays = this.daysArray.reduce(
          (acc: { [key: string]: boolean }, day: string) => {
            acc[day] = volunteer.days.includes(day);
            return acc;
          }, {}
        )

        this.volunteerForm.patchValue({
          name: volunteer.fullName,
          availableDays: availableDays
        })
      }
    })



  }


  onSave = () => {
    if (this.volunteerForm.valid) {
      let volunteer = new Volunteer();
      volunteer.days = this.currentVol.days;
      if (this.currentVol)
      volunteer.id = this.currentVol.id;
      volunteer.fullName = this.volunteerForm.value.name;
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
