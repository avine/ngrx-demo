import { Component } from '@angular/core';

import { addTodoListItem } from './todo-list/todo-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-demo';

  constructor() {
    console.log(addTodoListItem({ content: 'Hello' }));
  }
}
