import { TestBed } from '@angular/core/testing';

import { TipoDeAndamentoService } from './tipo-de-andamento.service';

describe('TipoDeAndamentoService', () => {
  let service: TipoDeAndamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDeAndamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
