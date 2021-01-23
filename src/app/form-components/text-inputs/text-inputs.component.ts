import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-inputs',
  templateUrl: './text-inputs.component.html',
  styleUrls: ['./text-inputs.component.css']
})
export class TextInputsComponent implements OnInit {

  // Forms initialization
  public textInputsForm: any;

  // Variables initialization
  public hide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.textInputsForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email])
    });

  }

}
