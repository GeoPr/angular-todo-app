import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  inputValue = '';

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo(e: Event) {
    e.preventDefault();
    const value = this.inputValue.trim();

    if (value) {
      this.todosService.add(value);
      this.inputValue = '';
    }
  }
}
