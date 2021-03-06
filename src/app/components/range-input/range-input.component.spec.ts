import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeInputComponent } from './range-input.component';

describe('RangeInputComponent', () => {
  let component: RangeInputComponent;
  let fixture: ComponentFixture<RangeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
