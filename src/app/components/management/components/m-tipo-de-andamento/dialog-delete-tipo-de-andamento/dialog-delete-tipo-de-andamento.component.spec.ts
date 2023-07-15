import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteTipoDeAndamentoComponent } from './dialog-delete-tipo-de-andamento.component';

describe('DialogDeleteTipoDeAndamentoComponent', () => {
  let component: DialogDeleteTipoDeAndamentoComponent;
  let fixture: ComponentFixture<DialogDeleteTipoDeAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteTipoDeAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteTipoDeAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
