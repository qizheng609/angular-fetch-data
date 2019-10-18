import { TestBed } from '@angular/core/testing';

import { GetCommentDataService } from './get-comment-data.service';

describe('GetCommentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCommentDataService = TestBed.get(GetCommentDataService);
    expect(service).toBeTruthy();
  });
});
