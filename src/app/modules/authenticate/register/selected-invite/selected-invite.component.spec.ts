import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedInviteComponent } from './selected-invite.component';

describe('SelectedInviteComponent', () => {
  let component: SelectedInviteComponent;
  let fixture: ComponentFixture<SelectedInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
