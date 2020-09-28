import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentontopicComponent } from './commentontopic.component';

describe('CommentontopicComponent', () => {
  let component: CommentontopicComponent;
  let fixture: ComponentFixture<CommentontopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentontopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentontopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
