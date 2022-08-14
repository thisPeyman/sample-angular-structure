import { Route } from '@angular/router';
import { LayoutComponent } from '../ui/layout/layout.component';

export const shellRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('src/app/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'todolist',
        loadChildren: () =>
          import('src/app/todolist/feature/todolist-shell/todolist-shell.module').then(
            (m) => m.TodolistShellModule
          ),
      },
    ],
  },
];
