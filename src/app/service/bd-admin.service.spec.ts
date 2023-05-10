import { TestBed } from '@angular/core/testing';

import { BdAdminService } from './bd-admin.service';

describe('BdAdminService', () => {
  let service: BdAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
