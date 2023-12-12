import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostProcessDataService } from '@services/post-process-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-incident',
  templateUrl: './log-incident.component.html',
  styleUrls: ['./log-incident.component.scss']
})
export class LogIncidentComponent  {

  ambulanceForm: FormGroup;
  buttonClicked: boolean = false;
  firstName: string;
  lastName: string;
  physicalAddress: string;
  contactNumber: string;
  ambulanceColor: string;
  ambulanceModel: string;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private http: HttpClient, private route: ActivatedRoute, private processData: PostProcessDataService) {
    this.ambulanceForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    contactNumber: ['', Validators.required],
    physicalAddress: ['', Validators.required],
    ambulanceColor: ['', Validators.required],
    ambulanceModel: ['', Validators.required]
      
    });
  }

  /* ngOnInit() {
    const param1 = this.route.snapshot.paramMap.get('id');
    const param2 = this.route.snapshot.paramMap.get('task');
    console.log("para1", param1);
    console.log("para2", param2);
  } */

  submitForm() {
    this.buttonClicked = true;
    if(this.ambulanceForm.valid){
      this.toastr.success('Success!');
      window.location.reload();
      const data = {
        "variables":{
          "firstName": {"value":this.firstName},
          "lastName": {"value":this.lastName},
          "physicalAddress": {"value":this.physicalAddress},
          "contactNumber": {"value":this.contactNumber},
          "ambulanceColor": {"value":this.ambulanceColor},
          "ambulanceModel": {"value":this.ambulanceModel}
        }
      };
      const taskId = this.route.snapshot.paramMap.get('taskId');
      const payload = JSON.stringify(data);
      const url: string = 'http://10.2.2.90:9023/camunda/rest/task/complete';
      //console.log("String:", taskId);
      //console.log("JSON:", payload);
      
      //call httpclient here
      this.processData.postData(taskId, payload,url).subscribe({
        next: (response) => {
          console.log("Success!", response);
          window.location.reload();
        },
        error: (error) => {
          console.log("Error!", error);
        }
      });
    }else{
      this.toastr.error('Error!');
    }
  }
}
  



