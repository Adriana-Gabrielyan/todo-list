import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';

  todos: any[];

  constructor(private _http: HttpService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this._http.getAPIData().subscribe((data) => {
      this.todos = data;
    });
  }
}
