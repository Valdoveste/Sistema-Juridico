import { TestBed } from '@angular/core/testing';

import { AreaDoDireitoService } from './area-do-direito.service';

describe('AreaDoDireitoService', () => {
  let service: AreaDoDireitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaDoDireitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
