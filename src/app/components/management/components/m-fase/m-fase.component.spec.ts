import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFaseComponent } from './m-fase.component';

describe('MFaseComponent', () => {
  let component: MFaseComponent;
  let fixture: ComponentFixture<MFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
