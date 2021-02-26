import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  isLoading = true;

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });
  }

  changeTodo(id: number) {
    this.todosService.change(id);
  }

  removeTodo(id: number) {
    this.todosService.remove(id);
  }
}
