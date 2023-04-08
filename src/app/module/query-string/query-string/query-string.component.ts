import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-query-string',
  templateUrl: './query-string.component.html',
  styleUrls: ['./query-string.component.css'],
})
export class QueryStringComponent implements OnInit {
  public id: number = 0;
  public name: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param: ParamMap) => {
      this.id = Number(param.get('id'));
      this.name = String(param.get('name'));
    });
  }
}
