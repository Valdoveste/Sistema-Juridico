import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTipoDeAcaoComponent } from './m-tipo-de-acao.component';

describe('MTipoDeAcaoComponent', () => {
  let component: MTipoDeAcaoComponent;
  let fixture: ComponentFixture<MTipoDeAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTipoDeAcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTipoDeAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
