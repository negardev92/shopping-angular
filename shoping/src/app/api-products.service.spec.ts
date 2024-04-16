import { TestBed } from '@angular/core/testing';

import { ApiProductsService } from './ApiProductsService';

describe('ApiProductsService', () => {
  let service: ApiProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
