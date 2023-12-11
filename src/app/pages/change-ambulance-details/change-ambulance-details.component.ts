// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-change-ambulance-details',
//   templateUrl: './change-ambulance-details.component.html',
//   styleUrls: ['./change-ambulance-details.component.scss']
// })


// export  class ChangeAmbulanceDetailsComponent implements OnInit {
//   ambulanceForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit() {
//     this.ambulanceForm = this.formBuilder.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       contactNumber: ['', Validators.required],
//       ambulanceModel: ['', Validators.required],
//       ambulanceColor: ['', Validators.required],
//       registrationNumber: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.ambulanceForm.valid) {
//       // Add your form submission logic here
//       console.log('Form submitted:', this.ambulanceForm.value);
//     } else {
//       // Mark all fields as touched to display error messages
//       Object.values(this.ambulanceForm.controls).forEach(control => {
//         control.markAsTouched();
//       });
//     }
//   }

//   isInvalid(controlName: string) {
//     const control = this.ambulanceForm.get(controlName);
//     return control.invalid && (control.dirty || control.touched);
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProcessDataService } from '@services/get-process-data.service';
import { PostProcessDataService } from '@services/post-process-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-ambulance-details',
  templateUrl: './change-ambulance-details.component.html',
  styleUrls: ['./change-ambulance-details.component.scss']
})
export class ChangeAmbulanceDetailsComponent{

  ambulanceForm: FormGroup;
  buttonClicked: boolean = false;
  firstName: string;
  lastName: string;
  contactNumber: string;
  ambulanceColor: string;
  ambulanceRegistartion: string;
  idData: any = {};
  a: any = {};
  postData: any;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private http: HttpClient, private route: ActivatedRoute, private processData: GetProcessDataService, postData: PostProcessDataService,private router:Router) {
    this.ambulanceForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      ambulanceColor: ['', Validators.required],
      ambulanceRegistartion: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.log(this.ambulanceForm);
    const taskId = this.route.snapshot.paramMap.get('taskId');
    const url: string = 'http://10.2.2.90:9023/camunda/rest/task/variables';
    const payload: string = "";
    
    //console.log("String:", payload);
    console.log("TaskId", taskId);
    this.processData.getData(taskId, payload, url).subscribe(
        (response) => {
          if(response){
            this.idData = response;
            console.log("Success!", this.idData);
            this.a = {"name":this.idData.firstName.value,
            "last":this.idData.lastName.value,
            "num":this.idData.contactNumber.value,
            "amb":this.idData.ambulanceColor.value,
            "ambu":this.idData.ambulanceModel.value,
          };
          console.log(this.a);
          }else{
            console.log("Error!");
          }
        }/* ,
        (error) => {
          console.log("Error!", error);
        } */
      );
  }

  submitForm() {
    this.buttonClicked = true;
    console.log(this.ambulanceForm);
    if(this.ambulanceForm.valid){
      this.toastr.success('Success!');
      const data = {
        "variables":{
          "firstName": {"value":this.firstName},
          "lastName": {"value":this.lastName},
          "contactNumber": {"value":this.contactNumber},
          "ambulanceColor": {"value":this.ambulanceColor},
          "ambulanceRegistartion": {"value":this.ambulanceRegistartion}
        }
      };
      const taskId = this.route.snapshot.paramMap.get('taskId');
      const payload = JSON.stringify(data);
      const url: string = 'http://10.2.2.90:9023/camunda/rest/task/complete';

      console.log("String:", payload);
      console.log("JSON:", data);

      //call httpclient here
      this.processData.getData(taskId, payload, url).subscribe({
        next: (response) => {
          if(response){
            console.log("Success!", response);
            window.location.reload();
            this.router.navigate(["/process-instance/:id/:descriptionprocess-instance/Ambulance:7:70658821-851a-11ee-9dca-00090ffe0001/Ambulance"]);
          
          }else{
            console.log("Error!");
          }
        },
        error: (error) => {
          console.log("Error!", error);
        }
      });
    }else{
      this.toastr.error('Error!');
    }

  }}

