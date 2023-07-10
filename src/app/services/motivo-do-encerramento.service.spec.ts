import { TestBed } from '@angular/core/testing';

import { MotivoDoEncerramentoService } from './motivo-do-encerramento.service';

describe('MotivoDoEncerramentoService', () => {
  let service: MotivoDoEncerramentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotivoDoEncerramentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
