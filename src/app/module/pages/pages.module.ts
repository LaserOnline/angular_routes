import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  // * Component มีอะไรบ้าง
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
