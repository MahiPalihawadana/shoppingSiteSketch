import { TestBed } from '@angular/core/testing';

import { LookbookServiceService } from './lookbook-service.service';

describe('LookbookServiceService', () => {
  let service: LookbookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookbookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
