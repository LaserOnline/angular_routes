import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { OopsComponent } from '../components/oops/oops.component';

export const routes: Routes = [
  {
    // * default
    path: '',
    // * Go to path
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // * Path Home ไปที่ Component Home
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('../module/pages/pages.module').then((m) => m.PagesModule),
  },
  // * โดย '**' wildcard route หรือ path
  // * ที่ไม่ตรงกับเงื่อนไขอื่น ๆ ใน routes
  // * ทั้งหมด จึงจะไปที่ component OopsComponent
  {
    path: '**',
    component: OopsComponent,
  },
];
