import { TestBed } from '@angular/core/testing';

import { PatronoAnteriorService } from './patrono-anterior.service';

describe('PatronoAnteriorService', () => {
  let service: PatronoAnteriorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatronoAnteriorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
