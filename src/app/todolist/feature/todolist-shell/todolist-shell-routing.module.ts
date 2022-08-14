import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../todolist-show/todolist-show.module').then((m) => m.TodolistShowModule),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('../todolist-detail/todolist-detail.module').then(
        (m) => m.TodolistDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodolistShellRoutingModule {}
