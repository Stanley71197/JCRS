import { TestBed } from '@angular/core/testing';

import { AdmissionFormService } from './admission-form.service';

describe('AdmissionFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmissionFormService = TestBed.get(AdmissionFormService);
    expect(service).toBeTruthy();
  });
});
