import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTipoDeAndamentoComponent } from './dialog-add-tipo-de-andamento.component';

describe('DialogAddTipoDeAndamentoComponent', () => {
  let component: DialogAddTipoDeAndamentoComponent;
  let fixture: ComponentFixture<DialogAddTipoDeAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTipoDeAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddTipoDeAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
