import { createFeatureSelector } from '@ngrx/store';

import { todoListKey, TodoListState } from './todo-list.reducer';

export const selectTodoList = createFeatureSelector<TodoListState>(todoListKey);
