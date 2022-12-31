import { TestBed } from '@angular/core/testing';

import { MarksApiService } from './marks-api.service';

describe('MarksApiService', () => {
  let service: MarksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
