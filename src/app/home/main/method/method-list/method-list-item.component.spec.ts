import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodListItemComponent } from './method-list-item.component';

describe('MethodListItemComponent', () => {
  let component: MethodListItemComponent;
  let fixture: ComponentFixture<MethodListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
