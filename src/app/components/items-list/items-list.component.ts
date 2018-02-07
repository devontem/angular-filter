import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

import Filter from './../../interfaces/filter.interface';
import Product from './../../interfaces/product.interface';
import Option from './../../interfaces/option.interface';
import { CarsService } from './../../services/cars.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
	data:Product[] = [];
	results:Product[] = [];

	@Input() filters:Filter;

	constructor(private CarsService:CarsService) { }

	ngOnChanges(changes: SimpleChanges){
		this.applyFilters();
	}

	ngOnInit() {
		this.getData();
	}

	getData(){
		this.CarsService.getData().subscribe((data:Product[])=>{
	  		this.data = this.results = data;
	  	}, (error) => {
	  		console.log('Error:', <any>error);
	  	});
	}

	applyFilters(){
		var filterCriteriaArray;
		var subsections;
		var result = this.data; // initializing list to plain data;

		Object.keys(this.filters).forEach((key:string) => {
			filterCriteriaArray = this.filters[key];
			subsections = []; // array for the mutally exclusive subsections

			// create the subsection of filtered results
			filterCriteriaArray.forEach((filter:Option, i:number) => {
				subsections[i] = result.filter((item:Product) => {
					 // set to true if filter.end equals null (meaning show all after the start)
					return item[key] >= filter.start && (filter.end ? item[key] <= filter.end : true);
				});
			});

			// merge them into one array
			subsections.forEach((item:Product, i:number) => {
				result = (i === 0) ? subsections[0] : result.concat(subsections[i])
			});
		});

		this.results = result;
	};
}