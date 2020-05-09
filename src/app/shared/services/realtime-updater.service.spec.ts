import { TestBed } from '@angular/core/testing';

import { RealtimeUpdaterService } from './realtime-updater.service';

describe('RealtimeUpdaterService', () => {
  let service: RealtimeUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtimeUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
