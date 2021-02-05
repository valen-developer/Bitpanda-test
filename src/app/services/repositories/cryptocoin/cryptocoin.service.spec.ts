import { TestBed } from '@angular/core/testing';

import { CryptocoinRepository } from './cryptocoin.service';

describe('CryptocoinService', () => {
  let service: CryptocoinRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptocoinRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
