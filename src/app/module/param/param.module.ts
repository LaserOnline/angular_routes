import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamRoutingModule } from './param-routing.module';
import { ParamComponent } from './param.component';


@NgModule({
  declarations: [
    ParamComponent
  ],
  imports: [
    CommonModule,
    ParamRoutingModule
  ]
})
export class ParamModule { }
