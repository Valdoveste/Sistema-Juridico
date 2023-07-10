import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAreaDoDireitoComponent } from './dialog-edit-area-do-direito.component';

describe('DialogEditAreaDoDireitoComponent', () => {
  let component: DialogEditAreaDoDireitoComponent;
  let fixture: ComponentFixture<DialogEditAreaDoDireitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditAreaDoDireitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditAreaDoDireitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
