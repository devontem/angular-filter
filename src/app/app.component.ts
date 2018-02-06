import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import Filter from './interfaces/filter.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filters:Filter;

  constructor() { }

  ngOnInit() {
		this.filters = {
			year: [],
			mpg: [],
			cyl: [],
			acc: [],
			dsp: [],
			lbs: [],
			hp: [],
		};
	}

	receiveMessage($event){
		this.filters = $event;
	}
}
