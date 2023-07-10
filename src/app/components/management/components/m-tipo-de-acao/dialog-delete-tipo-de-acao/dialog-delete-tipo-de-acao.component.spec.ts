import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteTipoDeAcaoComponent } from './dialog-delete-tipo-de-acao.component';

describe('DialogDeleteTipoDeAcaoComponent', () => {
  let component: DialogDeleteTipoDeAcaoComponent;
  let fixture: ComponentFixture<DialogDeleteTipoDeAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteTipoDeAcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteTipoDeAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
