import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryStringRoutingModule } from './query-string-routing.module';
import { QueryStringComponent } from './query-string/query-string.component';


@NgModule({
  declarations: [
    QueryStringComponent
  ],
  imports: [
    CommonModule,
    QueryStringRoutingModule
  ]
})
export class QueryStringModule { }
