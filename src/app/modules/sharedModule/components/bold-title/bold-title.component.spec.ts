import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldTitleComponent } from './bold-title.component';

describe('BoldTitleComponent', () => {
  let component: BoldTitleComponent;
  let fixture: ComponentFixture<BoldTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoldTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoldTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
