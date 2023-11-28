import { TestBed } from '@angular/core/testing';

import { GetProcessDataService } from './get-process-data.service';

describe('GetProcessDataService', () => {
  let service: GetProcessDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProcessDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
