import { createAction, props } from '@ngrx/store';

import { TodoListItem } from './todo-list.types';

export const addTodoListItem = createAction(
  '[Todo List] Add',
  props<Pick<TodoListItem, 'title'>>()
);

export const loadTodoList = createAction('[Todo List] Load');

export const loadTodoListSucceeded = createAction(
  '[Todo List] Load Succeeded',
  props<{ items: TodoListItem[] }>()
);
