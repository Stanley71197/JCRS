import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Details } from '../details';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
  })
export class StudentDashboardComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDetails();
  }

  details: Details = {
    firstName: '',
    lastName: '',
    email: '',
  };


  getDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dashboardService.getPersonalDetails(id).subscribe((details: Details) => {
      console.log(details);
      if (details) {
        this.details = details;
      }
    });
  }
onSubmit() {
      
        console.log(status);
        this.router.navigate([`recommend`]);
   
  }
onSub() {
      
        console.log(status);
        this.router.navigate([`acadform`]);
   
  }
}
