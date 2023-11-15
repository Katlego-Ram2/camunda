
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-incident',
  templateUrl: './log-incident.component.html',
  styleUrls: ['./log-incident.component.scss']
})
export class LogIncidentComponent  {

  ambulanceForm: FormGroup;
  buttonClicked: boolean = false;

  constructor(private fb: FormBuilder) {
    this.ambulanceForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      physicalAddress: ['', Validators.required],
      
    });
  }

  submitForm() {
    this.buttonClicked = true;

  }}
  



