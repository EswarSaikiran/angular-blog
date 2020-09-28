import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedtopicsforadminComponent } from './approvedtopicsforadmin.component';

describe('ApprovedtopicsforadminComponent', () => {
  let component: ApprovedtopicsforadminComponent;
  let fixture: ComponentFixture<ApprovedtopicsforadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedtopicsforadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedtopicsforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
