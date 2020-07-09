import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup, FormArray, FormControl, Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { JobFormService } from '../job-form.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent{

 jobForm = this.fb.group({
    puc: this.fb.group({
      rname: ['', Validators.required],
      remail: ['', Validators.required],
      raddress: ['', Validators.required],
      rwebsite: ['', Validators.required],
      rpincode: ['', Validators.required],
    }),


    mtech: this.fb.group({
      rseats: ['',Validators.required],
      rage: ['',Validators.required],
      rnotification: ['',Validators.required],
      rapplication: ['',Validators.required],
    }),
  });

  constructor(
 private fb: FormBuilder,
     private jobService: JobFormService,
    private route: ActivatedRoute,
    private router: Router,
) { }

onSubmit() {
    
         this.jobService.saveDetails(this.jobForm.value).subscribe((status) => {
      if (status === 'Saved') {
        console.log(status);
        this.router.navigate([`/admindash/${this.jobForm.get('puc').get('remail').value}`]);
      }
    });
   
  }
}
