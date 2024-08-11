import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchedulingModule } from './scheduling/scheduling.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VolunteerService } from './volunteer/volunteer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SchedulingModule,
    VolunteerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [VolunteerService],
  bootstrap: [AppComponent]
  

})
export class AppModule {
    
 }
