import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodItemComponent } from './method-item.component';

describe('MethodItemComponent', () => {
  let component: MethodItemComponent;
  let fixture: ComponentFixture<MethodItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
