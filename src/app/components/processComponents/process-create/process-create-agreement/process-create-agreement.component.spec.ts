import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateAgreementComponent } from './process-create-agreement.component';

describe('ProcessCreateAgreementComponent', () => {
  let component: ProcessCreateAgreementComponent;
  let fixture: ComponentFixture<ProcessCreateAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreateAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCreateAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
