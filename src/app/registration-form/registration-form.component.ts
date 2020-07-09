import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors,
} from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  })
export class RegistrationFormComponent {

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}



  confirmPasswordValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const passowrdValue = control.get('password').value;
    const confirmValue = control.get('confirm').value;
    return passowrdValue === confirmValue ? null : { confirmPassword: true };
  };

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
    lastName: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-z\s]/)]),
    pass: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}',
          ),
        ]),
        confirm: new FormControl('', [Validators.required]),
      },
      { validators: this.confirmPasswordValidator },
    ),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [Validators.pattern(/^[0-9]{10}$/)]),
  });

  onSubmit() {
    
    this.registerService.registeration(this.profileForm.value).subscribe((status) => {
      if (status === 'Saved') {
        this.router.navigate(['/login']);
      }
    });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
