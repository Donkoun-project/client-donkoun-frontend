import { TestBed } from '@angular/core/testing';

import { PercelService } from './percel.service';

describe('PercelService', () => {
  let service: PercelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PercelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
