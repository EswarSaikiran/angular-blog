import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadtopicsComponent } from './readtopics.component';

describe('ReadtopicsComponent', () => {
  let component: ReadtopicsComponent;
  let fixture: ComponentFixture<ReadtopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadtopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
