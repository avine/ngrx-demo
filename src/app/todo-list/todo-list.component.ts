import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { addTodoListItem } from './todo-list.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(addTodoListItem({ content: 'Hello' }));
  }
}
