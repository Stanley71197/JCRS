import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  })
export class LoginComponent {
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
      if (status === 'Saved') {
        this.router.navigate([`/dashboard/${this.profileForm.get('email').value}`]);
      } else if (status === 'acad') {
        this.router.navigate(['/acadform']);
      }  else if (status === 'Invalid') {
        this.message = 'Re-register your account';
      } else {
        this.message = 'Invalid credentials';
      }
    });
  }
}
