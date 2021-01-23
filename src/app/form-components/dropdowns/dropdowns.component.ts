import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  // Forms initialization
  public dropdownsForm: any;

  // Variables initialization
  public dropList: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.dropdownsForm = this.fb.group({
      dropdown: new FormControl(null, Validators.required)
    });

    this.dropList = [
      {id: '1', name: 'English'},
      {id: '2', name: 'Hindi'},
      {id: '3', name: 'French'},
    ];

  }

}
