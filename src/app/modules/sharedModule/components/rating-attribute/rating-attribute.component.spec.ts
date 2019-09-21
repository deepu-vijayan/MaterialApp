import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAttributeComponent } from './rating-attribute.component';

describe('RatingAttributeComponent', () => {
  let component: RatingAttributeComponent;
  let fixture: ComponentFixture<RatingAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
