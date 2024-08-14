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

// export class VolunteerDetailsComponent implements OnInit {
//   currentVol!: Volunteer;
//   daysArray: string[] = ["Sunday", "Monday", "Teusday", "Wendsday", "Thursday", "Friday"];
//   volunteerForm: FormGroup;
//   volunteerId?: string;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private volunteerService: VolunteerService,
//     private fb: FormBuilder
//   ) {
//     this.volunteerForm = this.fb.group({
//       name: [''],
//       phone: [''],
//       availableDays: this.fb.group(
//         this.daysArray.reduce((acc, day) => {
//           acc[day] = new FormControl(false);
//           return acc;
//         }, {} as { [key: string]: FormControl })
//       )
//     });
//   }

//   ngOnInit(): void {
//     this.volunteerId = this.route.snapshot.paramMap.get('id')!;
//     this.volunteerService.getVolunteerById(+this.volunteerId).subscribe((volunteer) => {
//       if (volunteer) {
//         this.currentVol = volunteer;
//         const availableDays = this.daysArray.reduce(
//           (acc: { [key: string]: boolean }, day: string) => {
//             acc[day] = this.currentVol.days.includes(day);
//             console.log(acc[day]);
            
//             return acc;
//           }, {}
//         );

//         // Update the form with the volunteer data
//         this.volunteerForm.patchValue({
//           name: volunteer.fullName,
//           phone: volunteer.phone,
//           availableDays: availableDays
//         });
//       }
//     });
//   }

//   toggleDay(day: string): void {
//     const currentAvailableDays = this.volunteerForm.get('availableDays')?.value;
//     const isCurrentlyAvailable = currentAvailableDays[day];
//     // Update form control value
//     this.volunteerForm.get('availableDays')?.patchValue({ [day]: !isCurrentlyAvailable });

//     // Update the currentVol.days array
//     if (isCurrentlyAvailable) {
//       this.currentVol.days = this.currentVol.days.filter(d => d !== day);
//     } else {
//       this.currentVol.days.push(day);
//     }
//   }


//   onSave = () => {
//     if (this.volunteerForm.valid) {
//       let volunteer = new Volunteer();
//       volunteer.days = this.currentVol.days;
//       if (this.currentVol)
//       volunteer.id = this.currentVol.id;
//       volunteer.fullName = this.volunteerForm.value.name;
//       // volunteer.address = this.volunteerForm.value.address;
//       volunteer.phone = this.currentVol.phone;
//       this.volunteerService.vol = volunteer;
//       this.volunteerService.updateVolunteer().subscribe(result => {
//         if (<boolean>result)
//           this.router.navigate(["/VolunteerList"]);

//         else
//           alert("this volunteer has no days");
//       })
//       this.router.navigate(["/VolunteerList"]);
//     }

//   }


// }
export class VolunteerDetailsComponent implements OnInit {
  volunteerForm: FormGroup;
  volunteerId!: number;
  daysArray: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private volunteerService: VolunteerService,
    private fb: FormBuilder
  ) {
    // Create the form with reactive form controls
    this.volunteerForm = this.fb.group({
      fullName: [''],
      phone: [''],
      days: this.fb.array(this.daysArray.map(() => this.fb.control(false)))
    });
  }

  ngOnInit(): void {
    this.volunteerId = +this.route.snapshot.paramMap.get('id')!;
    this.volunteerService.getVolunteerById(this.volunteerId).subscribe((volunteer: Volunteer) => {
      if (volunteer) {
        this.updateForm(volunteer);
      }
    });
  }

  get days(): FormArray {
    return this.volunteerForm.get('days') as FormArray;
  }

  private updateForm(volunteer: Volunteer) {
    this.volunteerForm.patchValue({
      fullName: volunteer.fullName,
      phone: volunteer.phone
    });

    // Update the FormArray with the volunteer's days array
    volunteer.days.forEach((isDayActive, index) => {
      this.days.at(index).setValue(isDayActive);
    });
  }

  toggleDay(index: number) {
    const currentStatus = this.days.at(index).value;
    this.days.at(index).setValue(!currentStatus);
  }

  onSave() {
    if (this.volunteerForm.valid) {
      const formValue = this.volunteerForm.value;
      const updatedVolunteer: Volunteer = {
        id: this.volunteerId,
        fullName: formValue.fullName,
        phone: formValue.phone,
        days: formValue.days
      };
      this.volunteerService.updateVolunteer(updatedVolunteer).subscribe(result => {
        if (result) {
          this.router.navigate(['/VolunteerList']);
        } else {
          alert('Error updating volunteer.');
        }
      });
    }
  }


 }