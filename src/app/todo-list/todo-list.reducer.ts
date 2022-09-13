import { Action, createReducer, on } from '@ngrx/store';

import * as TodoListActions from './todo-list.actions';
import { TodoListItem } from './todo-list.types';
import { getId } from './todo-list.utils';

export interface TodoListState {
  items: TodoListItem[];
}

const initialState: TodoListState = {
  items: [],
};

export const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.addTodoListItem, ({ items }, { content }) => ({
    items: [...items, { id: getId(), content, done: false }],
  }))
);

export const todoListKey = 'todoList';
