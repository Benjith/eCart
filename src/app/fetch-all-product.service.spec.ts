import { TestBed, inject } from '@angular/core/testing';

import { FetchAllProductService } from './fetch-all-product.service';

describe('FetchAllProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchAllProductService]
    });
  });

  it('should be created', inject([FetchAllProductService], (service: FetchAllProductService) => {
    expect(service).toBeTruthy();
  }));
});
