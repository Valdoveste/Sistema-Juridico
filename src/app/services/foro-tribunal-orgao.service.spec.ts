import { TestBed } from '@angular/core/testing';

import { ForoTribunalOrgaoService } from './foro-tribunal-orgao.service';

describe('ForoTribunalOrgaoService', () => {
  let service: ForoTribunalOrgaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForoTribunalOrgaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
