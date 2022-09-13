import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../app.reducer';
import { selectTodoList } from '../todo-list/todo-list.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  todoList$ = this.store.select(selectTodoList);

  constructor(private store: Store<AppState>) {
    this.store.select(selectTodoList).subscribe(console.log);
  }
}
