import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParamComponent } from './param.component';

const routes: Routes = [
  {
    path: '',
    component: ParamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamRoutingModule {}
