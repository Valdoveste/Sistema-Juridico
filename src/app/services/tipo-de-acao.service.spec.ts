import { TestBed } from '@angular/core/testing';

import { TipoDeAcaoService } from './tipo-de-acao.service';

describe('TipoDeAcaoService', () => {
  let service: TipoDeAcaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDeAcaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
