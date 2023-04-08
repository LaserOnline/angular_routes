import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-param-by-path',
  templateUrl: './param-by-path.component.html',
  styleUrls: ['./param-by-path.component.css'],
})
export class ParamByPathComponent implements OnInit {
  public name: string = '';
  public name2: string = '';
  public name3: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    // * รับตัวแปล ที่ชื่อว่า name จาก pages.routes.ts
    // * เมื่อมีการแปลงเปลียน จะทำงาน อีกครั้ง subscribe
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name') || ''; // กำหนดค่าให้กับ this.name ใน subscribe
    });
    // * วิธี 1 snapshot ทำงานครั้งเดียวจบ
    this.name3 = this.route.snapshot.params['name'];
    // * วิธีที่ 2 snapshot ทำงานครั้งเดียวจบ
    const params = this.route.snapshot.params;
    this.name2 = params['name'];
  }
}
