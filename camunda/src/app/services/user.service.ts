import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  emailAddress(emailAddress: any) {
      throw new Error('Method not implemented.');
  }
  apiUrl = 'http://10.2.2.90:9023/ekutrade/rest/user';
  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    console.log(`${this.apiUrl}/${username}`);
    return this.http.get(`${this.apiUrl}/${username}`);
  }

  getData(username:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${username}`)
    .pipe(
      catchError((error: any) => {
        console.log('Error fetching data', error);
        throw error;
      })
    )
  }

  // getUser(username: string) :any {
  //   this.http.get(`${this.apiUrl}/${username}`).pipe(map(data => {})).subscribe(result => {
  //     console.log(result);
  //     return result;
  //   });
  // }
}
