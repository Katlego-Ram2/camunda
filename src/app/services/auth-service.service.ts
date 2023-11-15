import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://10.2.2.90:9023/ekutrade/rest/user/login'; 

  constructor(private http: HttpClient) {}
  
  login(userId: string, password: string): Observable<any> {
    const loginEndpoint = this.apiUrl;
    const requestBody = { userId, password }; 
    return this.http.post(loginEndpoint, requestBody, {responseType: 'text'});
  }
}
