import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostProcessDataService {

  constructor(private http: HttpClient) { }

  postData(taskid: string, payload: string, url: string) {
    return this.http.post(url, {"name": taskid, "payLoad": payload}, {responseType: 'text'});
  }
}
