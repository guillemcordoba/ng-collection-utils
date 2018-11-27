import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDetailComponentComponent } from './generic-detail-component.component';

describe('GenericDetailComponentComponent', () => {
  let component: GenericDetailComponentComponent;
  let fixture: ComponentFixture<GenericDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
