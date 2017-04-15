import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodAddComponent } from './method-add.component';

describe('MethodAddComponent', () => {
  let component: MethodAddComponent;
  let fixture: ComponentFixture<MethodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
