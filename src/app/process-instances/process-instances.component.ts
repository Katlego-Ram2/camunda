// process-instances.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-process-instances',
  templateUrl: './process-instances.component.html',
  styleUrls: ['./process-instances.component.scss']
})
export class ProcessInstancesComponent implements OnInit {
  description: string;
  id: string;
  instances: any[];
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.description = params['description'];
      this.id = params['id'];
      this.loadInstances(this.id);
    });
  }

  loadInstances(id: string) {
    const apiUrl = `http://10.2.2.90:9023/camunda/rest/instance/getinstance/${id}`;

    this.httpClient.get(apiUrl).subscribe((data: any[]) => {
      this.instances = data;
    });
  }
  deleteInstance(instanceId: string) {

  const apiUrl = 'http://10.1.2.138:8080/engine-rest/process-instance/delete';

  const deletePayload = {
    deleteReason: 'aReason',
    processInstanceIds: [instanceId],
    skipCustomListeners: true,
    skipSubprocesses: true
  };

  this.httpClient.post(apiUrl, deletePayload).subscribe(
    (response) => {
      
      console.log('Instance deleted successfully', response);
      
      // Optionally, you can reload the instances after deletion
      // this.loadInstances(id);
    },
    (error) => {
     
      console.error('Error deleting instance', error);
    }
  );
}
suspendInstance(instanceId: string) {
 
  const apiUrl = 'http://10.2.2.90:9023/camunda/rest/process/suspended';
  const suspendPayload = {
    processInstanceIds: [instanceId],
    suspended: true
  };

  this.httpClient.post(apiUrl, suspendPayload).subscribe(
    (response) => {
      console.log('Instance suspended successfully', response);
      // Optionally, you can reload the instances after suspension
      // this.loadInstances(this.id);
    },
    (error) => {
      console.error('Error suspending instance', error);
    }
  );
}
// restartInstance(instanceId: string) {
//   const apiUrl = 'http://10.1.2.138:8080/engine-rest/process-instance/restart';
//   const restartPayload = {
//     processInstanceIds: [instanceId]
//   };

//   this.httpClient.post(apiUrl, restartPayload).subscribe(
//     (response) => {
//       console.log('Instance restarted successfully', response);
//       // Optionally, you can reload the instances after restarting
//       // this.loadInstances(this.id);
//     },
//     (error) => {
//       console.error('Error restarting instance', error);
//     }
//   );
// }

restartInstance(instanceId: string) {
  
  const activateUrl = 'http://10.2.2.90:9023/camunda/rest/process/suspended';
  const activatePayload = {
    processInstanceIds: [instanceId],
    suspended: false
  };

  this.httpClient.post(activateUrl, activatePayload).subscribe(
    (response) => {
      console.log('Instance activated successfully', response);
      // Optionally, you can reload the instances after suspension
      // this.loadInstances(this.id);
    },
    (error) => {
      console.error('Error activating instance', error);
    }
  );
}

}
