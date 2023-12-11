import { TestBed } from '@angular/core/testing';

import { PostProcessDataService } from './post-process-data.service';

describe('PostProcessDataService', () => {
  let service: PostProcessDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostProcessDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
