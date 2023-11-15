import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ambulance-details',
  templateUrl: './ambulance-details.component.html',
  styleUrls: ['./ambulance-details.component.scss']
})
export class AmbulanceDetailsComponent {

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
