import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerListComponent } from './volunteer/volunteer-list/volunteer-list.component';
import { SchedulingComponent } from './scheduling/scheduling/scheduling.component';
import { AppComponent } from './app.component';
import { VolunteerModule } from './volunteer/volunteer.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SchedulingModule } from './scheduling/scheduling.module';
import { VolunteerDetailsComponent } from './volunteer/volunteer-details/volunteer-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "VolunteerList", component: VolunteerListComponent },
  { path: "Scheduling", component: SchedulingComponent },
  {path: 'volunteerDetails/:id',component: VolunteerDetailsComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SchedulingModule,
    VolunteerModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }


