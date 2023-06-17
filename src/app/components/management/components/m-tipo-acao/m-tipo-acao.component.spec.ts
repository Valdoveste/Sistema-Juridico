import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTipoAcaoComponent } from './m-tipo-acao.component';

describe('MTipoAcaoComponent', () => {
  let component: MTipoAcaoComponent;
  let fixture: ComponentFixture<MTipoAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTipoAcaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTipoAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
