import {  Component, 
          OnInit, 
          Renderer2,
          ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
    private router:Router
  ) {}

  ngOnInit() {
      this.renderer.addClass(
          document.querySelector('app-root'),
          'hold-transition'
      );
      this.renderer.addClass(
          document.querySelector('app-root'),
          'welcome'
      ); 
      this.renderer.removeClass( 
          document.querySelector('app-root'),
          'sidebar-open'
      );
      this.renderer.removeClass( 
          document.querySelector('app-root'),
          'sidebar-mini'
      );
  }
  navigateToIAM(){
    
    this.router.navigate(['/IAM']);
  }

}
