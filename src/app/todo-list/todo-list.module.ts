import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { todoListKey, todoListReducer } from './todo-list.reducer';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    StoreModule.forFeature(todoListKey, todoListReducer, {}),
  ],
})
export class TodoListModule {}
