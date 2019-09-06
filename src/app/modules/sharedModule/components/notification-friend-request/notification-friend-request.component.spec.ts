import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationFriendRequestComponent } from './notification-friend-request.component';

describe('NotificationFriendRequestComponent', () => {
  let component: NotificationFriendRequestComponent;
  let fixture: ComponentFixture<NotificationFriendRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationFriendRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationFriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
