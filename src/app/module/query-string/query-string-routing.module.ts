import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryStringComponent } from './query-string/query-string.component';

const routes: Routes = [
  {
    path: '',
    component: QueryStringComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueryStringRoutingModule {}
