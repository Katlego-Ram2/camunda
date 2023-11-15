import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessInstancesService {
  private baseUrl = 'http://10.2.2.90:9023/camunda/rest/instance';

  constructor(private http: HttpClient) { }

  getInstances(id: string): Observable<any> {
    const url = `${this.baseUrl}/getinstance/${id}`;
    return this.http.get(url);
  }
}
