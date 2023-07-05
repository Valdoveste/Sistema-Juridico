import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddFaseComponent } from './dialog-add-fase.component';

describe('DialogAddFaseComponent', () => {
  let component: DialogAddFaseComponent;
  let fixture: ComponentFixture<DialogAddFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddFaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
