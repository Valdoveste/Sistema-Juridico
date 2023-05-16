import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateProgressComponent } from './process-create-progress.component';

describe('ProcessCreateProgressComponent', () => {
  let component: ProcessCreateProgressComponent;
  let fixture: ComponentFixture<ProcessCreateProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreateProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCreateProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
