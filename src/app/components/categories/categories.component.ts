import { Component, OnInit } from '@angular/core';

import categories from './categories.config';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
	categories;

  constructor() { }

  ngOnInit() {
		this.categories = categories;
		console.log('h')
		console.log(categories)
  }

}