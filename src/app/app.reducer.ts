import { todoListKey, TodoListState } from './todo-list/todo-list.reducer';

export interface AppState {
  [todoListKey]: TodoListState;
}
