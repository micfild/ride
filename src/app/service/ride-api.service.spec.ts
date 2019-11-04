import { TestBed } from '@angular/core/testing';

import { RideApiService } from './ride-api.service';

describe('RideApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RideApiService = TestBed.get(RideApiService);
    expect(service).toBeTruthy();
  });
});
