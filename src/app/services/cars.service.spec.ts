import { TestBed, inject } from '@angular/core/testing';

import { CarsService } from './cars.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('CarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsService],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
      ],
    });
  });

  it('should be created', inject([CarsService], (service: CarsService) => {
    expect(service).toBeTruthy();
  }));
});
