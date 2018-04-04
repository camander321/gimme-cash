import { TestBed, inject } from '@angular/core/testing';

import { FirebaseUsersService } from './firebase-users.service';

describe('FirebaseUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseUsersService]
    });
  });

  it('should be created', inject([FirebaseUsersService], (service: FirebaseUsersService) => {
    expect(service).toBeTruthy();
  }));
});
