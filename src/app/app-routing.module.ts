import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcadFormComponent } from './acad-form/acad-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { JobFormComponent } from './job-form/job-form.component';
import { InstituteComponent } from './institute/institute.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RecommendComponent } from './recommend/recommend.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'acadform', component: AcadFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', component: StudentDashboardComponent },
  { path: 'admissionform', component: AdmissionFormComponent },
  { path: 'jobform', component: JobFormComponent },
  { path: 'institute', component: InstituteComponent},
  { path: 'recruiter', component: RecruiterComponent},
  { path: 'admindash/:id', component: StudentDashboardComponent },
  { path: 'recommend', component: RecommendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule {}
