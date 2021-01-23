import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent implements OnInit {
  // Forms initialization
  public chipsForm: any;

  // Variables initialization
  public languageList: any;
  public todaysDate = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.chipsForm = this.fb.group({
      chip: new FormControl(null)
    });

    this.languageList = [
      {name: 'Python'},
      {name: 'C++'},
      {name: 'Java'},
    ];

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
