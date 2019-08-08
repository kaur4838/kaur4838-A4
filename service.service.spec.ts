import { TestBed } from '@angular/core/testing';

import { SERVICEService } from './service.service';

describe('SERVICEService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SERVICEService = TestBed.get(SERVICEService);
    expect(service).toBeTruthy();
  });
});
