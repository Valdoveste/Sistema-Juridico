import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAreaDoDireitoComponent } from './m-area-do-direito.component';

describe('MAreaDoDireitoComponent', () => {
  let component: MAreaDoDireitoComponent;
  let fixture: ComponentFixture<MAreaDoDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAreaDoDireitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAreaDoDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
