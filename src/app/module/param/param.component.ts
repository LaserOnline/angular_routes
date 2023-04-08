import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { routes } from 'src/app/routes/pages.routes';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css'],
})
export class ParamComponent implements OnInit {
  public id1: number = 0;
  public id2: number = 0;
  public id3: number = 0;
  public id4: number = 0;
  public name1: string = '';
  public name2: string = '';
  constructor(private routes: ActivatedRoute) {}
  ngOnInit(): void {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      this.id1 = Number(params.get('id')) as number;
      this.id2 = Number(params.get('id')) as number;
      this.id3 = Number(params.get('id'));
      this.id4 = +params.get('id')!;
      this.name1 = params.get('name') || '';
    });

    this.name2 = this.routes.snapshot.params['name'];
  }
}
