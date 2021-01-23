import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  // Forms initialization
  public buttonsForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.buttonsForm = this.fb.group({
      buttons: new FormControl(null)
    });

  }

}