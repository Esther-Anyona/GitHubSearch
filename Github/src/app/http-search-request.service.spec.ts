import { TestBed } from '@angular/core/testing';

import { HttpSearchRequestService } from './http-search-request.service';

describe('HttpSearchRequestService', () => {
  let service: HttpSearchRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSearchRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
