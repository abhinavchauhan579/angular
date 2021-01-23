import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  // Forms initialization
  public slidersForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.slidersForm = this.fb.group({
      checkedCheckbox: new FormControl(null)
    });

  }

}
