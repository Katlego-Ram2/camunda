import { TestBed } from '@angular/core/testing';

import { ProcessInstancesService } from './process-instances.service';

describe('ProcessInstancesService', () => {
  let service: ProcessInstancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessInstancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
