import { Component, OnInit } from '@angular/core';

import categories from './categories.config';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories:Category[];

  constructor() { }

  ngOnInit() {
		this.categories = categories;
		console.log(categories);
  }

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