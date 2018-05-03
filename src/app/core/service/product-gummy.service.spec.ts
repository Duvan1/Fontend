import { TestBed, inject } from '@angular/core/testing';

import { ProductGummyService } from './product-gummy.service';

describe('ProductGummyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGummyService]
    });
  });

  it('should be created', inject([ProductGummyService], (service: ProductGummyService) => {
    expect(service).toBeTruthy();
  }));
});
