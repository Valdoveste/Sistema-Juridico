import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAreaDealComponent } from './process-area-deal.component';

describe('ProcessAreaDealComponent', () => {
  let component: ProcessAreaDealComponent;
  let fixture: ComponentFixture<ProcessAreaDealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessAreaDealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessAreaDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
