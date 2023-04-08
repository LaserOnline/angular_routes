import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  SendParamByPath() {
    this.router.navigate(['/pages/param-by-path/', 'Send From Navigation']);
  }

  SendParam(): void {
    this.router.navigate(['/pages/param', { id: 2, name: 'H E L L O 2' }]);
  }
  public sendQueryString() {
    this.router.navigate(['/pages/query-string'], {
      queryParams: { id: 1, name: 'TypeScript' },
    });
  }

  public sendState() {
    this.router.navigateByUrl('/pages/state', {
      state: { id: 10, name: 'Param Page State' },
    });
  }
}
