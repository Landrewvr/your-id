import { TestBed } from '@angular/core/testing';

import { MockAuthGuardService } from './mock-auth-guard.service';

describe('MockAuthGuardService', () => {
  let service: MockAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockAuthGuardService],
    });
    service = TestBed.inject(MockAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
