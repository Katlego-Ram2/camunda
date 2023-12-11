import {Component, OnInit} from '@angular/core';
import { AppService } from '@services/app.service';
import { UserService } from '@services/user.service';
import {DateTime} from 'luxon';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription, map } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    //user: any;
    public user: any;
    private dataSubscription: Subscription;


    constructor(private userService: UserService,private appService: AppService, private router: Router , private http: HttpClient) {}

    ngOnInit(): void {

        //this.userService.getData()
        this.dataSubscription = this.userService.getUser(localStorage.getItem('userId')).subscribe(
            
            (response) => {
                console.log('Response', response);
                this.user = response;
        }, 
        (error) => {
            console.log('Error: ', error);
        });
    }

    logout() {
        this.appService.logout();

    }

    formatDate(date) {
        return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }

    ngOnDestroy(): void{
        this.dataSubscription.unsubscribe();
    }
}
