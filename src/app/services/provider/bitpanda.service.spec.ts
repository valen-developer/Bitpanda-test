import { TestBed } from '@angular/core/testing';

import { BitpandaService } from './bitpanda.service';

describe('BitpandaService', () => {
  let service: BitpandaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitpandaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
