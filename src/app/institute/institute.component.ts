import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})

export class InstituteComponent {
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
        this.router.navigate(['/admissionform']);
      } else {
        this.message = 'Invalid credentials';
      }
    });
  }
}
