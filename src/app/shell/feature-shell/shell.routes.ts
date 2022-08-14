import { Route } from '@angular/router';
import { LayoutComponent } from '../ui/layout/layout.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('src/app/dashboard/feature-dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];
