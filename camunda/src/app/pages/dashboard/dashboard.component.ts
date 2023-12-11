import { Component, OnInit } from '@angular/core';
import { ProcessService } from '@services/process.service';
import { Router } from '@angular/router';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  processId: string;
  httpClient: any;
  instances: any[];

  constructor(
    private processService: ProcessService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getAllProcesses();
    this.processService.getAllProcesses().subscribe((data: any) => {
      this.processId = data.Id; // Assign the processId from the response
    });
  }

  getAllProcesses() {
    this.processService.getAllProcesses().subscribe(
      (data: any) => {
        this.data = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  navigateToProcessInstance(description: string, id: string, instances: number) {
    if (instances > 0) {
      this.router.navigate(['/process-instance', id, description]);
    } else {
      
    }
  }
  startProcess(key: string, description: string) {
    this.processService.startProcess(key).subscribe(
      (response: any[] | string) => {
        if (Array.isArray(response)) {
          // Handle the array of instances
          this.instances = response;
        } else if (typeof response === 'string') {
          console.log(response);
        } else {
          console.error("Unexpected response type:", response);
        }
      },
      (error) => {
        console.error("Error starting process:", error);
      }
    );
  
    // Now you can check the description and navigate accordingly
    if (description === 'Ambulance') {
      // Navigate to the 'logincident' route
      this.router.navigate(['/logincident']);
    } else {
      // Handle other processes as needed
    }
  }
  

  addHoverClass(event: Event) {
    const target = event.target as HTMLElement;
    target.classList.add('link-hover');
  }

  removeHoverClass(event: Event) {
    const target = event.target as HTMLElement;
    target.classList.remove('link-hover');
  }

 

}

  


