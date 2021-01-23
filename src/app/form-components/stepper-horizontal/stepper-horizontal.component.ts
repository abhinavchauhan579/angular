import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-horizontal',
  templateUrl: './stepper-horizontal.component.html',
  styleUrls: ['./stepper-horizontal.component.css']
})
export class StepperHorizontalComponent implements OnInit {

  // Forms initialization
  public firstStepperForm: any;
  public secondStepperForm: any;
  public thirdStepperForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.firstStepperForm = this.fb.group({
      name: new FormControl(null, Validators.required)
    });

    this.secondStepperForm = this.fb.group({
      address: new FormControl(null, Validators.required)
    });
    
    this.thirdStepperForm = this.fb.group({
      phoneNo: new FormControl(null, Validators.required)
    });

  }

}
