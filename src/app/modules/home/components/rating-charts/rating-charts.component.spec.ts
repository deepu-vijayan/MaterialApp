import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingChartsComponent } from './rating-charts.component';

describe('RatingChartsComponent', () => {
  let component: RatingChartsComponent;
  let fixture: ComponentFixture<RatingChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
