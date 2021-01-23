import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.css']
})
export class ButtonTogglesComponent implements OnInit {
  // Forms initialization
  public buttonTogglesForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.buttonTogglesForm = this.fb.group({
      colors: new FormControl(null)
    });

  }

}
