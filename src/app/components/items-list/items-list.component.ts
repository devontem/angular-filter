import { Component, OnInit, Input } from '@angular/core';

import Filter from './../../interfaces/filter.interface';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
	@Input() filters:Filter;

  constructor() { }

  ngOnInit() {
  }
}
