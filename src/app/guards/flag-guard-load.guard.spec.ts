import { TestBed } from '@angular/core/testing';

import { FlagGuardLoadGuard } from './flag-guard-load.guard';

describe('FlagGuardLoadGuard', () => {
  let guard: FlagGuardLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FlagGuardLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
