import { TestBed } from '@angular/core/testing';

import { FruitsStockService } from './fruits-stock.service';

describe('FruitsStockService', () => {
  let service: FruitsStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitsStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
