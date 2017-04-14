import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodListComponent } from './method-list.component';

describe('MethodListComponent', () => {
  let component: MethodListComponent;
  let fixture: ComponentFixture<MethodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
