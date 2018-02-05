import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import Filter from './../../interfaces/filter.interface';

@Component({
  selector: 'app-filter-display',
  templateUrl: './filter-display.component.html',
  styleUrls: ['./filter-display.component.css']
})
export class FilterDisplayComponent implements OnInit {
	_filters:Filter;
	formattedList:object;

	@Input() set filters(value){
		this._filters = value;
		this.formattedList = this.formatList(value);
	};
	@Output() filterUpdateEvent:EventEmitter<object> = new EventEmitter<object>();

	Objectkeys = Object.keys; // in order to iterate over object in template

	constructor() { }

	ngOnInit() {
	}

	formatList(filters){
		var final = [];
		Object.keys(filters).forEach((key) => {
			filters[key].forEach((item) => {
				final.push(Object.assign({}, item, {key: key}));
			});
		});
		return final;
	}

	handleClick(key, id){
		console.log('delete ', id, this._filters);
		this._filters[key] = this._filters[key].filter((item) => item.id !== id);

		this.filterUpdateEvent.emit(Object.assign({}, this._filters));
	}
}
