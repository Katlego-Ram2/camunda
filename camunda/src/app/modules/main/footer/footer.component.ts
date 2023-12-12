import {Component, HostBinding} from '@angular/core';
import {DateTime} from 'luxon';
import packageInfo from './../../../../../package.json';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    @HostBinding('class') classes: string = 'main-footer';
    public appVersion = "0.0.1";
    public currentYear: string = DateTime.now().toFormat('y');
}
