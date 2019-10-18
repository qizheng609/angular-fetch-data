import { TestBed } from '@angular/core/testing';

import { GetItemDataService } from './get-item-data.service';

describe('GetItemDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetItemDataService = TestBed.get(GetItemDataService);
    expect(service).toBeTruthy();
  });
});
