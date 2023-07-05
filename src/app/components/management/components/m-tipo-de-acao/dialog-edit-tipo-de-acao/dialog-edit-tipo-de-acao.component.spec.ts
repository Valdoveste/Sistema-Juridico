import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTipoDeAcaoComponent } from './dialog-edit-tipo-de-acao.component';

describe('DialogEditTipoDeAcaoComponent', () => {
  let component: DialogEditTipoDeAcaoComponent;
  let fixture: ComponentFixture<DialogEditTipoDeAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTipoDeAcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditTipoDeAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
