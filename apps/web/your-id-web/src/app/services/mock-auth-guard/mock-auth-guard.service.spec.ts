import { TestBed } from '@angular/core/testing';

import { MockRoleSecurityService } from './mock-auth-guard.service';

describe('MockRoleSecurityService', () => {
  let service: MockRoleSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRoleSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
