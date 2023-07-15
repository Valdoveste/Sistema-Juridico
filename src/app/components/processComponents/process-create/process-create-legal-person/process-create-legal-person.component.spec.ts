import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateLegalPersonComponent } from './process-create-legal-person.component';

describe('ProcessCreateLegalPersonComponent', () => {
  let component: ProcessCreateLegalPersonComponent;
  let fixture: ComponentFixture<ProcessCreateLegalPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreateLegalPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCreateLegalPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
