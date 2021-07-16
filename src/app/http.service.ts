import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAPIData(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/');
  }
}
