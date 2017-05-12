import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodDetailCommentsComponent } from './method-detail-comments.component';

describe('MethodDetailCommentsComponent', () => {
  let component: MethodDetailCommentsComponent;
  let fixture: ComponentFixture<MethodDetailCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodDetailCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
