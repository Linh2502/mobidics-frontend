import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodEditComponent } from './method-edit.component';

describe('MethodEditComponent', () => {
  let component: MethodEditComponent;
  let fixture: ComponentFixture<MethodEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
