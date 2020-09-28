import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcommentsComponent } from './readcomments.component';

describe('ReadcommentsComponent', () => {
  let component: ReadcommentsComponent;
  let fixture: ComponentFixture<ReadcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
