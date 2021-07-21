import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../../Todo'

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})

export class TodoCardComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onDeleteTodo: EventEmitter<Task> = new EventEmitter;
  constructor() {}

  ngOnInit(): void {
  
  }

  onDelete(todo:any){
    this.onDeleteTodo.emit(todo)
  }
}
