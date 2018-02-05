import { Component, OnInit, Input } from '@angular/core';

import Filter from './../../interfaces/filter.interface';

@Component({
  selector: 'app-filter-display',
  templateUrl: './filter-display.component.html',
  styleUrls: ['./filter-display.component.css']
})
export class FilterDisplayComponent implements OnInit {
	@Input() filters:Filter;
	Objectkeys = Object.keys; // in order to iterate over object in template

  constructor() { }

  ngOnInit() {
  }

}
