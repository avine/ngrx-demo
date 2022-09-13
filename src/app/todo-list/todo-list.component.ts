import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.reducer';
import { addTodoListItem } from './todo-list.actions';
import { selectTodoList } from './todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoList$ = this.store.select(selectTodoList);

  constructor(private store: Store<AppState>) {}

  add() {
    this.store.dispatch(addTodoListItem({ content: 'Hello' }));
  }
}
