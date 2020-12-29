import { TestBed } from '@angular/core/testing';

import { NavigationmenuService } from './navigationmenu.service';

describe('NavigationmenuService', () => {
  let service: NavigationmenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationmenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
