import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaMovementComponent } from './process-area-movement.component';

describe('ProcessAreaMovementComponent', () => {
  let component: ProcessAreaMovementComponent;
  let fixture: ComponentFixture<ProcessAreaMovementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAreaMovementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAreaMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
