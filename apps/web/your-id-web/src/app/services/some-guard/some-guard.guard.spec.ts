import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { someGuardGuard } from './some-guard.guard';

describe('someGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => someGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
