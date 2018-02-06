import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsService {
	devHttpUrl:string = '/assets/cars.json';

	constructor(private http:HttpClient) { }

  getData(){
  	return this.http.get(this.devHttpUrl);
  }

}