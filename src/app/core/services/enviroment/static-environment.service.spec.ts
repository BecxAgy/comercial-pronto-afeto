import { TestBed } from '@angular/core/testing';

import { StaticEnvironmentService } from './static-environment.service';

describe('StaticEnvironmentService', () => {
  let service: StaticEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
