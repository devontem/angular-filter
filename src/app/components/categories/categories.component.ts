import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { categories } from './categories.config';
import Filter from './../../interfaces/filter.interface';
import Category from './../../interfaces/category.interface';
import Option from './../../interfaces/option.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories:Category[] = categories;

	@Input() filters:Filter;
	@Output() filterUpdateEvent:EventEmitter<object> = new EventEmitter<object>();

  	constructor() { }

  	ngOnInit() { 
  		this.categories = categories;
  	}

	isChecked(key:string, option:Option){
		return this.filters[key].some((item) => item.id === option.id);
	}

	handleChange(key:string, option:Option){
		// if the value is already present, remove else add
		if (this.isChecked(key, option)){
			this.filters[key] = this.filters[key].filter((item) => item.id !== option.id);
		} else {
			this.filters[key].push(option);
		}
		this.filterUpdateEvent.emit(Object.assign({}, this.filters));
	}

}
