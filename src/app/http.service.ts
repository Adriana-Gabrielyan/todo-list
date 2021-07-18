import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAPIData(){
    return this.http.get<any>('https://60f340396d44f30017788915.mockapi.io/api/v1/tasks');
  }
}
