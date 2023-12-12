import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GetProcessDataService } from '@services/get-process-data.service';
import { PostProcessDataService } from '@services/post-process-data.service';

@Component({
  selector: 'app-ambulance-details',
  templateUrl: './ambulance-details.component.html',
  styleUrls: ['./ambulance-details.component.scss']
})
export class AmbulanceDetailsComponent {

  ambulanceForm: FormGroup;
  buttonClicked: boolean = false;
  firstName: string;
  lastName: string;
  contactNumber: string;
  ambulanceColor: string;
  incidentType: string;
  ambulanceRegistartion: string;
  idData: any = {};
  a: any = {};

  constructor(private fb: FormBuilder, 
    private toastr: ToastrService,
     private http: HttpClient,
      private route: ActivatedRoute,
       private processData: PostProcessDataService, 
       private postData: GetProcessDataService,
       private router :Router) {


    this.ambulanceForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      ambulanceColor: ['', Validators.required],
      incidentType: ['', Validators.required],
      ambulanceRegistartion: ['', Validators.required],
    });
  }

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('taskId');
    const url: string = 'http://10.2.2.90:9023/camunda/rest/task/variables';
    const payload: string = "";
    
    //console.log("String:", payload);
    console.log("TaskId", taskId);
    this.postData.getData(taskId, payload, url).subscribe(
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
    if(this.ambulanceForm.valid){
      this.toastr.success('Success!');
      const data = {
        "variables":{
          "firstName": {"value":this.firstName},
          "lastName": {"value":this.lastName},
          "contactNumber": {"value":this.contactNumber},
          "ambulanceColor": {"value":this.ambulanceColor},
          "incidentType": {"value":this.incidentType},
          "ambulanceRegistartion": {"value":this.ambulanceRegistartion}
        }
      };
      const taskId = this.route.snapshot.paramMap.get('taskId');
      const payload = JSON.stringify(data);
      const url: string = 'http://10.2.2.90:9023/camunda/rest/task/complete';
      
      //console.log("String:", payload);
      //console.log("JSON:", data);

      //call httpclient here
      this.processData.postData(taskId, payload, url).subscribe({
        next: (response) => {
          if(response){
            console.log("Success!", response);
            this.router.navigate(["/process-instance/:id/:descriptionprocess-instance/Ambulance:7:70658821-851a-11ee-9dca-00090ffe0001/Ambulance"]);
            // window.location.reload();
           
          }else{
            console.log("Error!");
          }
        },
        error: (error) => {
          console.log("Error!", error);
        }
      });
    }else{
      this.toastr.error('Form invalid!', 'Error');
    }
  }}
