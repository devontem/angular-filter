import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsService {
	carsUrl:string = '/assets/cars.json';
	categoriesUrl:string = '/assets/categories.json'

	constructor(private http:HttpClient) { }

  getData(){
  	return this.http.get(this.carsUrl);
  }

  getCategories(){
  	return this.http.get(this.categoriesUrl);
  }

}