import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-client-complaint',
  templateUrl: './client-complaint.component.html',
  styleUrls: ['./client-complaint.component.scss']
})
export class ClientComplaintComponent {
  clientComplaintForm: FormGroup;
  buttonClicked: boolean = false;
clientComplaint: any;

  constructor(private fb: FormBuilder) {
    this.clientComplaintForm = this.fb.group({
      customerCareCentre: ['', Validators.required],
      accountNo: ['', Validators.required],
      standNo: ['', Validators.required],
      streetNoAndName: ['', Validators.required],
      clientComplaintNo: ['', Validators.required],
      township: ['', Validators.required],
      initials: ['', Validators.required],

      title: ['', Validators.required],
      physicalAddress: ['', Validators.required],
      code: ['', Validators.required],
      area: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  submitForm() {
    this.buttonClicked = true;

  }



}
