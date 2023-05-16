import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateComponent } from './process-create.component';

describe('ProcessCreateComponent', () => {
  let component: ProcessCreateComponent;
  let fixture: ComponentFixture<ProcessCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
