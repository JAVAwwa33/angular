import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should power up numbers', () => {
    const result = service.powerUp(3, 4);
    const expected = 81;
    expect(expected).toEqual(result);
  });
});
