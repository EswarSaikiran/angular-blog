import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCommentsByUserComponent } from './read-comments-by-user.component';

describe('ReadCommentsByUserComponent', () => {
  let component: ReadCommentsByUserComponent;
  let fixture: ComponentFixture<ReadCommentsByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadCommentsByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadCommentsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
