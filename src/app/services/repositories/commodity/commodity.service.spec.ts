import { TestBed } from '@angular/core/testing';

import { CommodityRepository } from './commodity.service';

describe('CommodityService', () => {
  let service: CommodityRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommodityRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
