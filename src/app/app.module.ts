import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchedulingModule } from './scheduling/scheduling.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerService } from './volunteer/volunteer.service';



// const ROUTES: Routes = [
//   { path:"VolunteerList" , component: VolunteerListComponent },
//   { path:"Scheduling" , component: SchedulingComponent },
// ];

@NgModule({
  declarations: [
    // AppComponent
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SchedulingModule,
    VolunteerModule,
    AppRoutingModule
  ],
  providers: [VolunteerService],
  bootstrap: [AppComponent],
  

})
export class AppModule {
  
 }
