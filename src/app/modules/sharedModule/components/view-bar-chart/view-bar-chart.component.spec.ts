import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBarChartComponent } from './view-bar-chart.component';

describe('ViewBarChartComponent', () => {
  let component: ViewBarChartComponent;
  let fixture: ComponentFixture<ViewBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
