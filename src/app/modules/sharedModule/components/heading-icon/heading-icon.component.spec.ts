import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingIconComponent } from './heading-icon.component';

describe('HeadingIconComponent', () => {
  let component: HeadingIconComponent;
  let fixture: ComponentFixture<HeadingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
