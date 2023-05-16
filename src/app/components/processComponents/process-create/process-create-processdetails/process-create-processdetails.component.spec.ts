import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreateProcessdetailsComponent } from './process-create-processdetails.component';

describe('ProcessCreateProcessdetailsComponent', () => {
  let component: ProcessCreateProcessdetailsComponent;
  let fixture: ComponentFixture<ProcessCreateProcessdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCreateProcessdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessCreateProcessdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
