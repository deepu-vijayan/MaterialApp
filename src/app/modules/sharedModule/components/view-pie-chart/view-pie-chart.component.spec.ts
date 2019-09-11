import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPieChartComponent } from './view-pie-chart.component';

describe('ViewPieChartComponent', () => {
  let component: ViewPieChartComponent;
  let fixture: ComponentFixture<ViewPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
