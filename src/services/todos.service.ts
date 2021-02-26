import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  date?: Date;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  todos: ITodo[] = [];

  constructor(private httpClient: HttpClient) {}

  fetchTodos(): Observable<ITodo[]> {
    return this.httpClient
      .get<ITodo[]>(url)
      .pipe(tap(newTodos => (this.todos = newTodos)));
  }

  add(title: string) {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false,
      date: new Date(),
    };

    this.todos.push(newTodo);
  }

  remove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  change(id: number) {
    const todo = this.todos.find(todo => todo.id === id)!;
    todo.completed = !todo.completed;
  }
}
