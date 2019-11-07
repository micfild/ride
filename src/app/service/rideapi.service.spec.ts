import { TestBed } from '@angular/core/testing';

import { RideapiService } from './rideapi.service';

describe('RideApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RideapiService = TestBed.get(RideapiService);
    expect(service).toBeTruthy();
  });
});
