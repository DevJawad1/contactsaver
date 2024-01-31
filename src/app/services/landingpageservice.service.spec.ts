import { TestBed } from '@angular/core/testing';

import { LandingpageserviceService } from './landingpageservice.service';

describe('LandingpageserviceService', () => {
  let service: LandingpageserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingpageserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
