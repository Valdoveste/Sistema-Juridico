import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessContainerComponent } from './process-container.component';

describe('ProcessContainerComponent', () => {
  let component: ProcessContainerComponent;
  let fixture: ComponentFixture<ProcessContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
