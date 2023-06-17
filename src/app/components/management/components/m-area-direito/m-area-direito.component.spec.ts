import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAreaDireitoComponent } from './m-area-direito.component';

describe('MAreaDireitoComponent', () => {
  let component: MAreaDireitoComponent;
  let fixture: ComponentFixture<MAreaDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAreaDireitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAreaDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
