import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodStartComponent } from './method-start.component';

describe('MethodStartComponent', () => {
  let component: MethodStartComponent;
  let fixture: ComponentFixture<MethodStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
