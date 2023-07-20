import { TestBed } from '@angular/core/testing';

import { ParteContrariaService } from './parte-contraria.service';

describe('ParteContrariaService', () => {
  let service: ParteContrariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParteContrariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
