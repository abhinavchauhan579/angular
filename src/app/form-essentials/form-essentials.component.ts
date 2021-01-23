import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-form-essentials',
  templateUrl: './form-essentials.component.html',
  styleUrls: ['./form-essentials.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class FormEssentialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
