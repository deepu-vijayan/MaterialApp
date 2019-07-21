import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAllComponent } from './invite-all.component';

describe('InviteAllComponent', () => {
  let component: InviteAllComponent;
  let fixture: ComponentFixture<InviteAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
