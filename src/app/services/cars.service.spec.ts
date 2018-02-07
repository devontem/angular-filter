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

  it('carsUrl should be "/assets/cars.json"', inject([CarsService], (service: CarsService) => {
    expect(service.carsUrl).toEqual('/assets/cars.json');
  }));

  it('categoriesUrl should be "/assets/categories.json"', inject([CarsService], (service: CarsService) => {
    expect(service.categoriesUrl).toEqual('/assets/categories.json');
  }));
});
