import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})

export class RecruiterComponent {
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  message = '';

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.loginService.verifyCredentials(this.profileForm.value).subscribe((status) => {
      console.log(status);
      if (status === 'acad') {
        this.router.navigate(['/jobform']);
      } else {
        this.message = 'Invalid credentials';
      }
    });
  }
}
