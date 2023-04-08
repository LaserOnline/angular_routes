import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamByPathRoutingModule } from './param-by-path-routing.module';
import { ParamByPathComponent } from './param-by-path/param-by-path.component';


@NgModule({
  declarations: [
    ParamByPathComponent
  ],
  imports: [
    CommonModule,
    ParamByPathRoutingModule
  ]
})
export class ParamByPathModule { }
