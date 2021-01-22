import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

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
  public languageList: any;
  public dropList: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.controlsForm = this.fb.group({

      checkedCheckbox: new FormControl(false),
      indeterminateCheckbox: new FormControl(false),
      disabledCheckbox: new FormControl(false),
      resultCheckbox: new FormControl(false),

      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),

      dropdown: new FormControl(null, Validators.required)
    });

    this.languageList = [
      {name: 'Python'},
      {name: 'C++'},
      {name: 'Java'},
    ];

    this.dropList = [
      {id: '1', name: 'English'},
      {id: '2', name: 'Hindi'},
      {id: '3', name: 'French'},
    ];

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
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our language
    if ((value || '').trim()) {
      this.languageList.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(language: any): void {
    const index = this.languageList.indexOf(language);
    if (index >= 0) {
      this.languageList.splice(index, 1);
    }
  }

}
