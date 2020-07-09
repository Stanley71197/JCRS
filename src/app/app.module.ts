import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { MaterialImportsModule } from './material-imports.module';
import { AcadFormComponent } from './acad-form/acad-form.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import { InstituteComponent } from './institute/institute.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RecommendComponent } from './recommend/recommend.component';

@NgModule({
  declarations: [
  AppComponent,
  RegistrationFormComponent,
  AcadFormComponent,
  LoginComponent,
  StudentDashboardComponent,
  AdmissionFormComponent,
  JobFormComponent,
  InstituteComponent,
  RecruiterComponent,
  AdminDashboardComponent,
  RecommendComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  MaterialImportsModule,
  HttpClientModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
export class AppModule {}
