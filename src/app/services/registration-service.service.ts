import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://10.2.2.90:9023/ekutrade/rest/user/create';

  // private apiUrl ='http://127.0.0.1:3000/api/register';
  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(this.apiUrl, userData, {responseType: 'text'});
  }
}