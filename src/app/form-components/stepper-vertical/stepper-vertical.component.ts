import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper-vertical',
  templateUrl: './stepper-vertical.component.html',
  styleUrls: ['./stepper-vertical.component.css']
})
export class StepperVerticalComponent implements OnInit {
  
  // Forms initialization
  public firstStepperForm: any;
  public secondStepperForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.firstStepperForm = this.fb.group({
      name: new FormControl(null, Validators.required)
    });

    this.secondStepperForm = this.fb.group({
      address: new FormControl(null, Validators.required)
    });
    
  }

}
