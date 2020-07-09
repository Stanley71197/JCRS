import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl, Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdmissionFormService } from '../admission-form.service';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent {

 admissionForm = this.fb.group({
    puc: this.fb.group({
      iname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
      pincode: ['', Validators.required],
    }),


    mtech: this.fb.group({
      seats: ['',Validators.required],
      age: ['',Validators.required],
      notification: ['',Validators.required],
      application: ['',Validators.required],
    }),
  });

  constructor(
    private fb: FormBuilder,
    private admissionService: AdmissionFormService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }
onSubmit() {
    this.admissionService.saveDetails(this.admissionForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.router.navigate([`/admindash/${this.admissionForm.get('puc').get('email').value}`]);
      }
    });
  }

}


