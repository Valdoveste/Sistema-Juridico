import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaDetailsComponent } from './process-area-details.component';

describe('ProcessAreaDetailsComponent', () => {
  let component: ProcessAreaDetailsComponent;
  let fixture: ComponentFixture<ProcessAreaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAreaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAreaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
