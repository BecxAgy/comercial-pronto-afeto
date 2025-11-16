import { TestBed } from '@angular/core/testing';

import { ApplicationEnvironmentService } from './application-environment.service';

describe('ApplicationEnvironmentService', () => {
  let service: ApplicationEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
