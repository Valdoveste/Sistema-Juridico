import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaPreviousPatronsComponent } from './process-area-previous-patrons.component';

describe('ProcessAreaPreviousPatronsComponent', () => {
  let component: ProcessAreaPreviousPatronsComponent;
  let fixture: ComponentFixture<ProcessAreaPreviousPatronsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAreaPreviousPatronsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAreaPreviousPatronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
