import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
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
