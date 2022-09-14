import { EMPTY } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { loadTodoList, loadTodoListSucceeded } from './todo-list.actions';
import { TodoListService } from './todo-list.service';

@Injectable()
export class TodoListEffects {
  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodoList),
      switchMap(() =>
        this.todoListService.get().pipe(
          map((items) => loadTodoListSucceeded({ items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoListService: TodoListService
  ) {}
}
