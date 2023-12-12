import {Component, OnInit} from '@angular/core';
import {AppService} from '@services/app.service';
import { UserService } from '@services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
    public user:any;
    public username:any;
    constructor(private appService: AppService,private users:UserService) {}

    ngOnInit(): void {
        this.user = this.users;
        console.log(this.user);
        this.user = this.users.getUser(localStorage.getItem('userId')).subscribe(
            (response) => {
                    console.log('Response', response);
                    this.user = response;
                   
            }, 
            (error) => {
                console.log('Error: ', error);
            });
        }
} 


