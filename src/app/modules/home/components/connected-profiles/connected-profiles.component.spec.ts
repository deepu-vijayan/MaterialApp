import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedProfilesComponent } from './connected-profiles.component';

describe('ConnectedProfilesComponent', () => {
  let component: ConnectedProfilesComponent;
  let fixture: ComponentFixture<ConnectedProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
