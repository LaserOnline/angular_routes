import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/routes/pages.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
