import { TestBed } from '@angular/core/testing';

import { JobFormService } from './job-form.service';

describe('JobFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobFormService = TestBed.get(JobFormService);
    expect(service).toBeTruthy();
  });
});
