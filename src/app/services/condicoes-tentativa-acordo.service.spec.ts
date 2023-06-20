import { TestBed } from '@angular/core/testing';

import { CondicoesTentativaAcordoService } from './condicoes-tentativa-acordo.service';

describe('CondicoesTentativaAcordoService', () => {
  let service: CondicoesTentativaAcordoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondicoesTentativaAcordoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
