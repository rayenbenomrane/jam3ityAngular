import { TestBed } from '@angular/core/testing';

import { JoueurenDemandeService } from './joueuren-demande.service';

describe('JoueurenDemandeService', () => {
  let service: JoueurenDemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueurenDemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
