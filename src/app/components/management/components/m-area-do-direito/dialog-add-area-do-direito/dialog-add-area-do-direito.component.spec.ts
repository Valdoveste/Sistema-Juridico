import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAreaDoDireitoComponent } from './dialog-add-area-do-direito.component';

describe('DialogAddAreaDoDireitoComponent', () => {
  let component: DialogAddAreaDoDireitoComponent;
  let fixture: ComponentFixture<DialogAddAreaDoDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAreaDoDireitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddAreaDoDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
