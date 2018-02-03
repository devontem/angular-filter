import { Component, OnInit } from '@angular/core';

import categories from './categories.config';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories:Category[];
	filters:Filter;

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
		return this.filters[key].some((item) => {
			return (item.start === option.start) && (item.end === option.end);
		});
	}

	handleChange(key, option){
		console.log(key, option)

		// if the value is already present, remove else add
		if (this.isChecked(key, option)){
			this.filters[key] = this.filters[key].filter((item) => item.start !== option.start && item.end !== option.end);
		} else {
			this.filters[key].push(option);
		}

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
	title:string;
	start:number;
	end:number;
}
