import { TestBed } from '@angular/core/testing';

import { AbbonementService } from './abbonement.service';

describe('AbbonementService', () => {
  let service: AbbonementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbbonementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
