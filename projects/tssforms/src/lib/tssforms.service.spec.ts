import { TestBed, inject } from '@angular/core/testing';

import { TssformsService } from './tssforms.service';

describe('TssformsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TssformsService]
    });
  });

  it('should be created', inject([TssformsService], (service: TssformsService) => {
    expect(service).toBeTruthy();
  }));
});
