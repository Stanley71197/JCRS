import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl, Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AcadFormService } from '../acad-form.service';

@Component({
  selector: 'app-acad-form',
  templateUrl: './acad-form.component.html',
  styleUrls: ['./acad-form.component.css'],
  })
export class AcadFormComponent {

  acadForm = this.fb.group({
    puc: this.fb.group({
      email: ['', Validators.required],
      gender: ['', Validators.required],
      income: ['', Validators.required],
      father: ['', Validators.required],
      mother: ['', Validators.required],
      moccupation: ['', Validators.required],
      foccupation: ['', Validators.required],
    }),
 
interest: this.fb.group({
i1a: ['', Validators.required],
i2a: ['', Validators.required],
i3a: ['', Validators.required],

i1b: ['', Validators.required],
i2b: ['', Validators.required],
i3b: ['', Validators.required],

i1c: ['', Validators.required],
i2c: ['', Validators.required],
i3c: ['', Validators.required],
      
    }),




    university: this.fb.group({
     year10: ['',Validators.required],
     baord10: ['',Validators.required],
     percentage10: ['',Validators.required],
	
     baord12: ['',Validators.required],
     year12: ['',Validators.required],
     percentage12: ['',Validators.required],
sub1: ['',Validators.required],
sub2: ['',Validators.required],
sub3: ['',Validators.required],

byear: ['',Validators.required],
     bpercentage: ['',Validators.required],

myear: ['',Validators.required],
     mpercentage: ['',Validators.required],

     maths: ['',Validators.required],
      physics: ['',Validators.required],
      biology: ['',Validators.required],
      social: ['',Validators.required],
    }),

    mtech: this.fb.group({
      grade: ['',Validators.required],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private acadService: AcadFormService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  nextClick() {
    console.log(this.acadForm.value);
  }

  onSubmit() {
    console.log(this.acadForm.value);
    this.acadService.saveDetails(this.acadForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.router.navigate([`/dashboard/${this.acadForm.get('puc').get('email').value}`]);
      }
    });
  }
}
