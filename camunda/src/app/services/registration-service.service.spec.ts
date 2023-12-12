import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration-service.service';

describe('RegistrationServiceService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
