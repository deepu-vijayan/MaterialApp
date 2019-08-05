import { TestBed } from '@angular/core/testing';

import { SocialApiService } from './socialapi.service';

describe('SocialApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocialApiService = TestBed.get(SocialApiService);
    expect(service).toBeTruthy();
  });
});
