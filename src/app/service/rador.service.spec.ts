import { TestBed } from '@angular/core/testing';

import { RadorService } from './rador.service';

describe('RadorService', () => {
  let service: RadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
