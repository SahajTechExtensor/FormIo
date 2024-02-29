import { TestBed } from '@angular/core/testing';

import { ComponentControlsService } from './component-controls.service';

describe('ComponentControlsService', () => {
  let service: ComponentControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
