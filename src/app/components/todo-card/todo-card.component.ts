import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  todos = [
    {
      title: 'Eating',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id velit  doloremque?',
      dueDate: '15/07/2021 10:00 AM',
      completed: true,
    },
    {
      title: 'Codding',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id velit  doloremque?',
      dueDate: '15/07/2021 11:00 AM',
      completed: true,
    },
    {
      title: 'Go for a Walk',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id velit  doloremque?',
      dueDate: '15/07/2021 08:00 PM',
      completed: false,
    },
    {
      title: 'Sleep',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id velit  doloremque?',
      dueDate: '15/07/2021 11:00 PM',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
