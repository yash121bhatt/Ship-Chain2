import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activatGuard } from './activat.guard';

describe('activatGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activatGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
