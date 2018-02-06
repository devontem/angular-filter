import { Component, OnInit, Input } from '@angular/core';

import Filter from './../../interfaces/filter.interface';

import { CarsService } from './../../services/cars.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
	rawData:any = [];
	results:any = [];

	@Input() filters:Filter;

	constructor(private CarsService:CarsService) { }

	ngOnChanges(changes){
		this.applyFilters();
	}

	ngOnInit() {
		this.getRawData();
	}

	getRawData(){
		this.CarsService.getData().subscribe((data)=>{
	  		this.rawData = this.results = data;
	  	}, (error) => {
	  		console.log('Error:', <any>error);
	  	});
	}

	applyFilters(){
		var filterCriteriaArray;
		var subsections;
		var result = this.rawData; // initializing list to plain data;

		Object.keys(this.filters).forEach((key) => {
			filterCriteriaArray = this.filters[key];
			subsections = []; // array for the mutally exclusive subsections

			// create the subsection of filtered results
			filterCriteriaArray.forEach((filter, i) => {
				subsections[i] = result.filter((item) => {
					 // set to true if filter.end equals null (meaning show all after the start)
					return item[key] >= filter.start && (filter.end ? item[key] <= filter.end : true);
				});
			});

			// merge them into one array
			subsections.forEach((item, i) => {
				result = (i === 0) ? subsections[0] : result.concat(subsections[i])
			});
		});

		this.results = result;
	};
}