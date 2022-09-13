import { createAction, props } from '@ngrx/store';

import { TodoListItem } from './todo-list.types';

export const addTodoListItem = createAction(
  '[Todo List] Add',
  props<Pick<TodoListItem, 'content'>>()
);
