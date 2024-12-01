import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService],
    });
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle loadingState between true and false', () => {
    service.loadingState.set(true);
    expect(service.loadingState()).toBe(true);

    service.loadingState.set(false);
    expect(service.loadingState()).toBe(false);
  });
});