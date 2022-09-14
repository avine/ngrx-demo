import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { TodoListEffects } from './todo-list.effects';
import { todoListKey, todoListReducer } from './todo-list.reducer';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    StoreModule.forFeature(todoListKey, todoListReducer, {}),
    EffectsModule.forFeature([TodoListEffects]),
  ],
})
export class TodoListModule {}
