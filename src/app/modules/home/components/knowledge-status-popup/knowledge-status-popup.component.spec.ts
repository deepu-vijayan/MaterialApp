import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeStatusPopupComponent } from './knowledge-status-popup.component';

describe('KnowledgeStatusPopupComponent', () => {
  let component: KnowledgeStatusPopupComponent;
  let fixture: ComponentFixture<KnowledgeStatusPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeStatusPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
