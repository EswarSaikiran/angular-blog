import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopictoadminComponent } from './topictoadmin.component';

describe('TopictoadminComponent', () => {
  let component: TopictoadminComponent;
  let fixture: ComponentFixture<TopictoadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopictoadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopictoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
