import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstatusbyadminComponent } from './editstatusbyadmin.component';

describe('EditstatusbyadminComponent', () => {
  let component: EditstatusbyadminComponent;
  let fixture: ComponentFixture<EditstatusbyadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstatusbyadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstatusbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
