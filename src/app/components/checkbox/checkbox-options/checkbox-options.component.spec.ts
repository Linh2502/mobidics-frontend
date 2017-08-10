import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxOptionsComponent } from './checkbox-options.component';

describe('CheckboxOptionsComponent', () => {
  let component: CheckboxOptionsComponent;
  let fixture: ComponentFixture<CheckboxOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
