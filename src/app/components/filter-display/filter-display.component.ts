import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import Filter from './../../interfaces/filter.interface';

@Component({
  selector: 'app-filter-display',
  templateUrl: './filter-display.component.html',
  styleUrls: ['./filter-display.component.css']
})
export class FilterDisplayComponent implements OnInit {
	@Input() filters:Filter;
	@Output() filterUpdateEvent:EventEmitter<object> = new EventEmitter<object>();

	Objectkeys = Object.keys; // in order to iterate over object in template

	constructor() { }

	ngOnInit() {
	}

	handleClick(key, id){
		console.log('delete ', id);
		this.filters[key] = this.filters[key].filter((item) => item.id !== id);

		this.filterUpdateEvent.emit(Object.assign({}, this.filters));
	}

	}
