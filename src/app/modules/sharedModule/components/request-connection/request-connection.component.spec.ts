import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConnectionComponent } from './request-connection.component';

describe('RequestConnectionComponent', () => {
  let component: RequestConnectionComponent;
  let fixture: ComponentFixture<RequestConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
