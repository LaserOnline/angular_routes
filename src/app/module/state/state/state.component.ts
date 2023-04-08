import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/routes/pages.routes';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css'],
})
export class StateComponent implements OnInit {
  public id: number = 0;
  public name: string = '';
  constructor(private routes: Router) {
    // alert(this.routes.getCurrentNavigation()?.extras?.state?.['name']);
    this.id = this.routes.getCurrentNavigation()?.extras?.state?.['id'];
    this.name = this.routes.getCurrentNavigation()?.extras?.state?.['name'];
  }
  ngOnInit(): void {}
}
