import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTipoDeAndamentoComponent } from './dialog-edit-tipo-de-andamento.component';

describe('DialogEditTipoDeAndamentoComponent', () => {
  let component: DialogEditTipoDeAndamentoComponent;
  let fixture: ComponentFixture<DialogEditTipoDeAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTipoDeAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditTipoDeAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
