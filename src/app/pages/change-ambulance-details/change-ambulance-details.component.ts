import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-ambulance-details',
  templateUrl: './change-ambulance-details.component.html',
  styleUrls: ['./change-ambulance-details.component.scss']
})


export  class ChangeAmbulanceDetailsComponent implements OnInit {
  ambulanceForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ambulanceForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      ambulanceModel: ['', Validators.required],
      ambulanceColor: ['', Validators.required],
      registrationNumber: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.ambulanceForm.valid) {
      // Add your form submission logic here
      console.log('Form submitted:', this.ambulanceForm.value);
    } else {
      // Mark all fields as touched to display error messages
      Object.values(this.ambulanceForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  isInvalid(controlName: string) {
    const control = this.ambulanceForm.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }
}
