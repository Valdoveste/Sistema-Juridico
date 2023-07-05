import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTipoDeAcaoComponent } from './dialog-add-tipo-de-acao.component';

describe('DialogAddTipoDeAcaoComponent', () => {
  let component: DialogAddTipoDeAcaoComponent;
  let fixture: ComponentFixture<DialogAddTipoDeAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTipoDeAcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddTipoDeAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
