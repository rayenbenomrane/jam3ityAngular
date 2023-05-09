import { TestBed } from '@angular/core/testing';

import { JoueurenTestService } from './joueuren-test.service';

describe('JoueurenTestService', () => {
  let service: JoueurenTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurenTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
