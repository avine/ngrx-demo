import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TodoListItem } from './todo-list.types';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient
      .get<TodoListItem[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((items) => items.slice(0, 20)));
  }
}
