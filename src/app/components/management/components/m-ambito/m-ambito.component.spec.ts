import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAmbitoComponent } from './m-ambito.component';

describe('MAmbitoComponent', () => {
  let component: MAmbitoComponent;
  let fixture: ComponentFixture<MAmbitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAmbitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAmbitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
