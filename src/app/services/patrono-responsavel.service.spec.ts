import { TestBed } from '@angular/core/testing';

import { PatronoResponsavelService } from './patrono-responsavel.service';

describe('PatronoResponsavelService', () => {
  let service: PatronoResponsavelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatronoResponsavelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
