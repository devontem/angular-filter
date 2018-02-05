import { Component, OnInit, Input } from '@angular/core';

import Filter from './../../interfaces/filter.interface';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
	rawData;
	@Input() filters:Filter;
	results = [];

  constructor() { }

  ngOnChanges(changes){
  	this.applyFilters();
  }

  ngOnInit() {
  	this.getRawData();
  }

  getRawData(){
  	var fl = data();
  	this.rawData = fl;
  	this.results = fl;
  }

  applyFilters(){
  	var result = this.rawData; // initializing list to plain data;

  	Object.keys(this.filters).forEach((key) => {
  		var filterCriteriaArray = this.filters[key];
  		var subsections = []; // array for the mutally exclusive subsections

  		// create the subsection of filtered results
  		filterCriteriaArray.forEach((filter, i) => {
  			subsections[i] = result.filter((item) => item[key] >= filter.start && item[key] <= filter.end);
  		});

  		// merge them into one array
  		subsections.forEach((item, i) => {
  			result = (i === 0) ? subsections[0] : result.concat(subsections[i])
  		});
  	});

  	this.results = result;
  };
}


function data(){
	return [{"name":"chevrolet chevelle malibu","mpg":18,"cyl":8,"dsp":307,"hp":130,"lbs":3504,"acc":12,"year":70,"origin":1},{"name":"buick skylark 320","mpg":15,"cyl":8,"dsp":350,"hp":165,"lbs":3693,"acc":11.5,"year":70,"origin":1},{"name":"plymouth satellite","mpg":18,"cyl":8,"dsp":318,"hp":150,"lbs":3436,"acc":11,"year":70,"origin":1},{"name":"amc rebel sst","mpg":16,"cyl":8,"dsp":304,"hp":150,"lbs":3433,"acc":12,"year":70,"origin":1},{"name":"ford torino","mpg":17,"cyl":8,"dsp":302,"hp":140,"lbs":3449,"acc":10.5,"year":70,"origin":1},{"name":"ford galaxie 500","mpg":15,"cyl":8,"dsp":429,"hp":198,"lbs":4341,"acc":10,"year":70,"origin":1},{"name":"chevrolet impala","mpg":14,"cyl":8,"dsp":454,"hp":220,"lbs":4354,"acc":9,"year":70,"origin":1},{"name":"plymouth fury iii","mpg":14,"cyl":8,"dsp":440,"hp":215,"lbs":4312,"acc":8.5,"year":70,"origin":1},{"name":"pontiac catalina","mpg":14,"cyl":8,"dsp":455,"hp":225,"lbs":4425,"acc":10,"year":70,"origin":1},{"name":"amc ambassador dpl","mpg":15,"cyl":8,"dsp":390,"hp":190,"lbs":3850,"acc":8.5,"year":70,"origin":1},{"name":"citroen ds-21 pallas","mpg":-1,"cyl":4,"dsp":133,"hp":115,"lbs":3090,"acc":17.5,"year":70,"origin":2},{"name":"chevrolet chevelle concours (sw)","mpg":-1,"cyl":8,"dsp":350,"hp":165,"lbs":4142,"acc":11.5,"year":70,"origin":1},{"name":"ford torino (sw)","mpg":-1,"cyl":8,"dsp":351,"hp":153,"lbs":4034,"acc":11,"year":70,"origin":1},{"name":"plymouth satellite (sw)","mpg":-1,"cyl":8,"dsp":383,"hp":175,"lbs":4166,"acc":10.5,"year":70,"origin":1},{"name":"amc rebel sst (sw)","mpg":-1,"cyl":8,"dsp":360,"hp":175,"lbs":3850,"acc":11,"year":70,"origin":1},{"name":"dodge challenger se","mpg":15,"cyl":8,"dsp":383,"hp":170,"lbs":3563,"acc":10,"year":70,"origin":1},{"name":"plymouth 'cuda 340","mpg":14,"cyl":8,"dsp":340,"hp":160,"lbs":3609,"acc":8,"year":70,"origin":1},{"name":"ford mustang boss 302","mpg":-1,"cyl":8,"dsp":302,"hp":140,"lbs":3353,"acc":8,"year":70,"origin":1},{"name":"chevrolet monte carlo","mpg":15,"cyl":8,"dsp":400,"hp":150,"lbs":3761,"acc":9.5,"year":70,"origin":1},{"name":"buick estate wagon (sw)","mpg":14,"cyl":8,"dsp":455,"hp":225,"lbs":3086,"acc":10,"year":70,"origin":1},{"name":"toyota corona mark ii","mpg":24,"cyl":4,"dsp":113,"hp":95,"lbs":2372,"acc":15,"year":70,"origin":3},{"name":"plymouth duster","mpg":22,"cyl":6,"dsp":198,"hp":95,"lbs":2833,"acc":15.5,"year":70,"origin":1},{"name":"amc hornet","mpg":18,"cyl":6,"dsp":199,"hp":97,"lbs":2774,"acc":15.5,"year":70,"origin":1},{"name":"ford maverick","mpg":21,"cyl":6,"dsp":200,"hp":85,"lbs":2587,"acc":16,"year":70,"origin":1},{"name":"datsun pl510","mpg":27,"cyl":4,"dsp":97,"hp":88,"lbs":2130,"acc":14.5,"year":70,"origin":3},{"name":"volkswagen 1131 deluxe sedan","mpg":26,"cyl":4,"dsp":97,"hp":46,"lbs":1835,"acc":20.5,"year":70,"origin":2},{"name":"peugeot 504","mpg":25,"cyl":4,"dsp":110,"hp":87,"lbs":2672,"acc":17.5,"year":70,"origin":2},{"name":"audi 100 ls","mpg":24,"cyl":4,"dsp":107,"hp":90,"lbs":2430,"acc":14.5,"year":70,"origin":2},{"name":"saab 99e","mpg":25,"cyl":4,"dsp":104,"hp":95,"lbs":2375,"acc":17.5,"year":70,"origin":2},{"name":"bmw 2002","mpg":26,"cyl":4,"dsp":121,"hp":113,"lbs":2234,"acc":12.5,"year":70,"origin":2},{"name":"amc gremlin","mpg":21,"cyl":6,"dsp":199,"hp":90,"lbs":2648,"acc":15,"year":70,"origin":1},{"name":"ford f250","mpg":10,"cyl":8,"dsp":360,"hp":215,"lbs":4615,"acc":14,"year":70,"origin":1},{"name":"chevy c20","mpg":10,"cyl":8,"dsp":307,"hp":200,"lbs":4376,"acc":15,"year":70,"origin":1},{"name":"dodge d200","mpg":11,"cyl":8,"dsp":318,"hp":210,"lbs":4382,"acc":13.5,"year":70,"origin":1},{"name":"hi 1200d","mpg":9,"cyl":8,"dsp":304,"hp":193,"lbs":4732,"acc":18.5,"year":70,"origin":1},{"name":"datsun pl510","mpg":27,"cyl":4,"dsp":97,"hp":88,"lbs":2130,"acc":14.5,"year":71,"origin":3},{"name":"chevrolet vega 2300","mpg":28,"cyl":4,"dsp":140,"hp":90,"lbs":2264,"acc":15.5,"year":71,"origin":1},{"name":"toyota corona","mpg":25,"cyl":4,"dsp":113,"hp":95,"lbs":2228,"acc":14,"year":71,"origin":3}]
}