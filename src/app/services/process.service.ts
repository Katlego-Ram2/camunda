import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private apiUrl = 'http://10.2.2.90:9023/camunda/rest/process/getall';

  constructor(private http: HttpClient) { }

  getAllProcesses() {
    return this.http.get(this.apiUrl);
  }
  
//   startProcess(key: string): Observable<any> {
//     const startUrl = `http://10.2.2.90:9023/camunda/rest/process/{ReviewInvoice}`;

//     // const startUrl = 'http://localhost:8080/engine-rest/process-definition/key/register/start';
//     console.log('start');
//     // You can include any request data as needed (e.g., variables or form data)
//     const requestData = {};
//     console.log('start');
//     // Define headers (modify as needed)
//     //const headers = new HttpHeaders({
//     //  'Content-Type': 'application/json',
      
      
//     //});
  
//     var headers = new HttpHeaders();

//     headers = headers.set('Content-Type', 'application/json').set('Accept','*/*');

//     const httpBody = {content: "whatevercontent"}
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     };
  
//     // Use pipe and switchMap to combine both HTTP requests
//     return this.http.get<any>('http://10.2.2.90:9023/camunda/rest/process/{ReviewInvoice}',httpBody,httpOptions);
    
//   }
  
// } console.log('start');

startProcess(key: string): Observable<string> {
  
  const startUrl = `http://10.2.2.90:9023/camunda/rest/process/{${key}}`;

  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');

  const httpBody = { content: 'text' };

  return this.http.get(startUrl, {
    headers,
    params: httpBody,
    responseType: 'text'
  }).pipe(
    catchError((error) => {
      console.error('Error starting process:', error);
      throw error; 
    })
  );
}
}