import { TestBed } from '@angular/core/testing';

import { FetchphotosService } from './fetchphotos.service';

describe('FetchphotosService', () => {
  let service: FetchphotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchphotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
