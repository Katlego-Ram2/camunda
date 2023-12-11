import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iam',
  templateUrl: './iam.component.html',
  styleUrls: ['./iam.component.scss']
})
export class IAMComponent {
  constructor(private router:Router){}
  navigateToProcessDashboard() {
    
    this.router.navigate(['/dashboard']);
  }
}
