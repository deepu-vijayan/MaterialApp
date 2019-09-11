import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFactorsComponent } from './rating-factors.component';

describe('RatingFactorsComponent', () => {
  let component: RatingFactorsComponent;
  let fixture: ComponentFixture<RatingFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
