import { Routes } from '@angular/router';
import { PagesComponent } from '../module/pages/pages/pages.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'navigation',
        pathMatch: 'prefix',
      },
      {
        path: 'navigation',
        loadChildren: () =>
          import('../module/navigation/navigation.module').then(
            (m) => m.NavigationModule
          ),
      },
      //* มีการส่งตัวแปล ชื่อ ว่า name
      {
        path: 'param-by-path/:name',
        loadChildren: () =>
          import('../module/param-by-path/param-by-path.module').then(
            (m) => m.ParamByPathModule
          ),
      },
      {
        path: 'param',
        loadChildren: () =>
          import('../module/param/param.module').then((m) => m.ParamModule),
      },
      {
        path: 'query-string',
        loadChildren: () =>
          import('../module/query-string/query-string.module').then(
            (m) => m.QueryStringModule
          ),
      },
      {
        path: 'state',
        loadChildren: () =>
          import('../module/state/state.module').then((m) => m.StateModule),
      },
    ],
  },
];
