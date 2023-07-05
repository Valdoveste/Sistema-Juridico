import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteAreaDoDireitoComponent } from './dialog-delete-area-do-direito.component';

describe('DialogDeleteAreaDoDireitoComponent', () => {
  let component: DialogDeleteAreaDoDireitoComponent;
  let fixture: ComponentFixture<DialogDeleteAreaDoDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteAreaDoDireitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteAreaDoDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
