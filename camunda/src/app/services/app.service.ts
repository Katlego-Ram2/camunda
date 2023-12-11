import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import { AuthService } from './auth-service.service';
import { async } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public user: any = null;
    res: any;

    constructor(private router: Router, private get_auth: AuthService, private toastr: ToastrService) {}

    async loginByAuth({userId, password}) {
        try {
            /* const token = await Gatekeeper.loginByAuth(email, password);
            console.log(token);
            localStorage.setItem('token', token); */
            //var gprofile = await this.getProfile();
            //console.log(gprofile);
            //console.log(userId, password);
            /* var user = {
                "userId":"test@example.com",
                "password": "admin"
            } */
            /* const login_test = this.get_auth.login(userId, password).subscribe({
                next(response){
                    console.log(response);
                }
            })*/
            //console.log(login_test);
            
            this.get_auth.login(userId, password).subscribe(
                (response) => {
                    if(response === 'SUCCESS') {
                        localStorage.setItem('userId', userId);
                        this.toastr.success('Login succesful');
                        this.router.navigate(['/dashboard']);
                    }else{
                        this.toastr.error('User does not exist');
                    }
                    console.log('Response', response);
                    this.user = response;
            }, 
            (error) => {
                console.log('Error: ', error);
                this.toastr.error('Something went wrong, please try again');
            });

           
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async registerByAuth({email, password}) {
        try {
            const token = await Gatekeeper.registerByAuth(email, password);
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Register success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async loginByGoogle() {
        try {
            const token = await Gatekeeper.loginByGoogle();
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Login success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async registerByGoogle() {
        try {
            const token = await Gatekeeper.registerByGoogle();
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Register success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async loginByFacebook() {
        try {
            const token = await Gatekeeper.loginByFacebook();
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Login success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async registerByFacebook() {
        try {
            const token = await Gatekeeper.registerByFacebook();
            localStorage.setItem('token', token);
            await this.getProfile();
            this.router.navigate(['/']);
            this.toastr.success('Register success');
        } catch (error) {
            this.toastr.error(error.message);
        }
    }

    async getProfile() {
        try {
            //this.user = await Gatekeeper.getProfile();
        } catch (error) {
            this.logout();
            throw error;
        }
    }

    logout() {
        //localStorage.removeItem('token');
        //localStorage.removeItem('gatekeeper_token');
        this.user = null;
        this.router.navigate(['/login']);
    }
}
