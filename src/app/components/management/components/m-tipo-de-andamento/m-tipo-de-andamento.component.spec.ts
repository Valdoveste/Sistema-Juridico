import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTipoDeAndamentoComponent } from './m-tipo-de-andamento.component';

describe('MTipoDeAndamentoComponent', () => {
  let component: MTipoDeAndamentoComponent;
  let fixture: ComponentFixture<MTipoDeAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTipoDeAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTipoDeAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
