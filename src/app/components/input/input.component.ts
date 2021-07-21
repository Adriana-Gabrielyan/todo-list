import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() inputModel: string = '';
  @Input() type: string = 'text';
  @Output() inputModelChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeInputModel(inputModel: string){
    this.inputModelChange.emit(inputModel)
  }
}
