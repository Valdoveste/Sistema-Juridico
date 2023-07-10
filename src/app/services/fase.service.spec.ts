import { TestBed } from '@angular/core/testing';

import { FaseService } from './fase.service';

describe('FaseService', () => {
  let service: FaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
