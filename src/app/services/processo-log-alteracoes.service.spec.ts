import { TestBed } from '@angular/core/testing';

import { ProcessoLogAlteracoesService } from './processo-log-alteracoes.service';

describe('ProcessoLogAlteracoesService', () => {
  let service: ProcessoLogAlteracoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessoLogAlteracoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
