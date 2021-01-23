import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent implements OnInit {
  // Forms initialization
  public checkboxesForm: any;

  // Variables initialization
  public checkedState = false;
  public indeterminateState = false;
  public disabledState = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.checkboxesForm = this.fb.group({

      checkedCheckbox: new FormControl(false),
      indeterminateCheckbox: new FormControl(false),
      disabledCheckbox: new FormControl(false),
      resultCheckbox: new FormControl(false)
    });

    this.checkboxesForm.get('checkedCheckbox').valueChanges.subscribe((value: any) => {
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

    this.checkboxesForm.get('indeterminateCheckbox').valueChanges.subscribe((value: any) => {
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

    this.checkboxesForm.get('disabledCheckbox').valueChanges.subscribe((value: any) => {
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
