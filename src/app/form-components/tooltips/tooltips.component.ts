import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css']
})
export class TooltipsComponent implements OnInit {
  // Forms initialization
  public tooltipsForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.tooltipsForm = this.fb.group({
      tooltips: new FormControl(null)
    });

  }

}
