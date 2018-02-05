import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import categories from './categories.config';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories:Category[];

	@Input() filters:Filter;
	@Output() filterUpdateEvent:EventEmitter<object> = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
		this.categories = categories;
		this.filters = {
			year: [],
			mpg: [],
			cyl: [],
			acc: [],
			dsp: [],
			lbs: [],
			hp: []
		};
		console.log(categories);
	}

	isChecked(key, option){
		return this.filters[key].some((item) => item.id === option.id);
	}

	handleChange(key, option){
		console.log(key, option)

		// if the value is already present, remove else add
		if (this.isChecked(key, option)){
			this.filters[key] = this.filters[key].filter((item) => item.id !== option.id);
		} else {
			this.filters[key].push(option);
		}

		this.filterUpdateEvent.emit(this.filters);
		// trigger output emitter
		console.log('this.filters['+key+']', this.filters[key]);
	}

}

interface Filter {
	year:Option[];
	mpg:Option[];
	cyl:Option[];
	acc:Option[];
	dsp:Option[];
	lbs:Option[];
	hp:Option[];
}

interface Category {
	title:string;
	key:string;
	options:Option[];
}

interface Option {
	id:number;
	title:string;
	start:number;
	end:number;
}
