import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();
  title!: string;
  description!: string;
  status!: string;
  due!: string;
  isAddTodoOpen = false;
  showSuccessMessage = false;

  constructor() {}

  ngOnInit(): void {}

  showAddTodo() {
    this.isAddTodoOpen = true;
  }
  removeAddTodoCard() {
    this.isAddTodoOpen = false;
  }

  onSubmit() {
    if (!this.title || !this.description || !this.status || !this.due) {
      alert('All fields are required');
      return;
    }

    if (new Date(this.due) < new Date()) {
      alert('Think about future');
      return
    }
    
    this.showSuccessMessage = true;

    const newTodo = {
      title: this.title,
      description: this.description,
      status: this.status,
      due: this.due,
      created: new Date(),
    };

    this.onAddTodo.emit(newTodo);

    this.title = '';
    this.description = '';
    this.status = '';
    this.due = '';
    this.isAddTodoOpen = false;

    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000);
  }
}
