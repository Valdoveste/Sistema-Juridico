import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateFisicalPersonComponent } from './process-create-fisical-person.component';

describe('ProcessCreateFisicalPersonComponent', () => {
  let component: ProcessCreateFisicalPersonComponent;
  let fixture: ComponentFixture<ProcessCreateFisicalPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreateFisicalPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCreateFisicalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
