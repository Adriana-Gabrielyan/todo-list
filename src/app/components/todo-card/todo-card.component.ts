import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})

export class TodoCardComponent implements OnInit {
  @Input() todos: any[] = [];

  constructor() {}

  ngOnInit(): void {}
  
}
