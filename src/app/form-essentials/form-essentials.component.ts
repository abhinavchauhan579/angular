import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-essentials',
  templateUrl: './form-essentials.component.html',
  styleUrls: ['./form-essentials.component.css']
})
export class FormEssentialsComponent implements OnInit {

  // Forms initialization
  public controlsForm: any;

  // Variables initialization
  public checkedState = false;
  public indeterminateState = false;
  public disabledState = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.controlsForm = this.fb.group({
      checkedCheckbox: new FormControl(false),
      indeterminateCheckbox: new FormControl(false),
      disabledCheckbox: new FormControl(false),
      resultCheckbox: new FormControl(false),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required)
    });

    this.controlsForm.get('checkedCheckbox').valueChanges.subscribe((value: any) => {
      if(value === true) {
        this.checkedState = true;
        this.indeterminateState = false;
        this.disabledState = false;
      }
      else {
        this.checkedState = false;
        this.indeterminateState = false;
        this.disabledState = false;
      }
    });

    this.controlsForm.get('indeterminateCheckbox').valueChanges.subscribe((value: any) => {
      if(value) {
        this.checkedState = false;
        this.indeterminateState = true;
        this.disabledState = false;
      }
      else {
        this.checkedState = false;
        this.indeterminateState = false;
        this.disabledState = false;
      }
    });

    this.controlsForm.get('disabledCheckbox').valueChanges.subscribe((value: any) => {
      if(value) {
        this.checkedState = false;
        this.indeterminateState = false;
        this.disabledState = true;
      }
      else {
        this.checkedState = false;
        this.indeterminateState = false;
        this.disabledState = false;
      }
    });

  }

}
