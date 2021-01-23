import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-datepickers',
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.css']
})
export class DatepickersComponent implements OnInit {
  // Forms initialization
  public datepickersForm: any;

  // Variables initialization
  public todaysDate = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.datepickersForm = this.fb.group({
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      currentDate: new FormControl(this.todaysDate)
    });

  }

}
