import { TestBed } from '@angular/core/testing';

import { AmbitoService } from './ambito.service';

describe('AmbitoService', () => {
  let service: AmbitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
