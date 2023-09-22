import { TestBed } from '@angular/core/testing';

import { SearchProcessoService } from './search-processo.service';

describe('SearchProcessoService', () => {
  let service: SearchProcessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchProcessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
