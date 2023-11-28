import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetProcessDataService {

  constructor(private http: HttpClient) { }

  getData(taskid: string, payload: string, url: string) {
    return this.http.post(url, {"name": taskid, "payLoad": payload}, {responseType: 'json'});
  }
}
