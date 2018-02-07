import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import Filter from './../../interfaces/filter.interface';
import Category from './../../interfaces/category.interface';
import Option from './../../interfaces/option.interface';
import { CarsService } from './../../services/cars.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories:Category;

	@Input() filters:Filter;
	@Output() filterUpdateEvent:EventEmitter<object> = new EventEmitter<object>();

  	constructor(private CarsService:CarsService) { }

  	ngOnInit() { 
  		this.getCategories();
  	}

	getCategories(){
		this.CarsService.getCategories().subscribe((data:Category)=>{
	  		this.categories = data;
	  	}, (error) => {
	  		console.log('Error:', <any>error);
	  	});
	}

	isChecked(key:string, option:Option){
		return this.filters[key].some((item:Option) => item.id === option.id);
	}

	handleChange(key:string, option:Option){
		// if the value is already present, remove else add
		if (this.isChecked(key, option)){
			this.filters[key] = this.filters[key].filter((item:Option) => item.id !== option.id);
		} else {
			this.filters[key].push(option);
		}
		this.filterUpdateEvent.emit(Object.assign({}, this.filters));
	}

}
