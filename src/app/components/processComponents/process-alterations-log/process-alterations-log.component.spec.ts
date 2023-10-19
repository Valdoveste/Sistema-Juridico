import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAlterationsLogComponent } from './process-alterations-log.component';

describe('ProcessAlterationsLogComponent', () => {
  let component: ProcessAlterationsLogComponent;
  let fixture: ComponentFixture<ProcessAlterationsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAlterationsLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAlterationsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
