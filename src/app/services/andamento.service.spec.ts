import { TestBed } from '@angular/core/testing';

import { AndamentoService } from './andamento.service';

describe('AndamentoService', () => {
  let service: AndamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
