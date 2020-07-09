import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Details } from '../details';
import { AdminDashboardService } from '../admindash.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

   constructor(
    private admindashService: AdminDashboardService,
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
    this.admindashService.getPersonalDetails(id).subscribe((details: Details) => {
      console.log(details);
      if (details) {
        this.details = details;
      }
    });
  }

}
