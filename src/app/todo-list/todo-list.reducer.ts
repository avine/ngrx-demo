import { createReducer, on } from '@ngrx/store';

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
  on(TodoListActions.addTodoListItem, ({ items }, { title }) => ({
    items: [...items, { id: getId(), title, completed: false }],
  })),
  on(TodoListActions.loadTodoListSucceeded, (state, { items }) => ({
    ...state,
    items,
  }))
);

export const todoListKey = 'todoList';
