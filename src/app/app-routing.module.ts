import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'todo-list',
    loadChildren: () =>
      import('./todo-list/todo-list.module').then((mod) => mod.TodoListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
