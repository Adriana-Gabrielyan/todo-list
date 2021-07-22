import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private _http: TodoService) {}

  ngOnInit(): void {
    this._http.getAPIData().subscribe((data) => {
      this.todos = data.sort((a, b) => (a.created > b.created ? -1 : 1));
    });
  }  
  deleteTodo(todo: Todo) {
    this._http
      .deleteTodo(todo)
      .subscribe(
        () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
      );
  }

  addTodo(todo: Todo) { 
    this._http.addTodo(todo).subscribe((task) => {
      this.todos.unshift(task);
    });
  }
}
