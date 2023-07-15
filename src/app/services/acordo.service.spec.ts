import { TestBed } from '@angular/core/testing';

import { AcordoService } from './acordo.service';

describe('AcordoService', () => {
  let service: AcordoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcordoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
