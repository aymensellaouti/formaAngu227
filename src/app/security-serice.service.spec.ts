import { TestBed } from '@angular/core/testing';

import { SecuritySericeService } from './security-serice.service';

describe('SecuritySericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecuritySericeService = TestBed.get(SecuritySericeService);
    expect(service).toBeTruthy();
  });
});
