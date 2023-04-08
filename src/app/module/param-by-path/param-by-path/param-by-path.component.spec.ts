import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamByPathComponent } from './param-by-path.component';

describe('ParamByPathComponent', () => {
  let component: ParamByPathComponent;
  let fixture: ComponentFixture<ParamByPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamByPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamByPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
