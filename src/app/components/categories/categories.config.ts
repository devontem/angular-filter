const categories = [
	{ 
		title: "Year", 
		key: "year",
		options: [ {
			id: 1,
			title: "< 72",
			start: 0,
			end: 72
		}, {
			id: 2,
			title: "73 - 79",
			start: 73,
			end: 79
		}, {
			id: 3,
			title: "80+",
			start: 80,
			end: null
		} ]
	},
	{ 
		title: "Miles Per Gallon", 
		key: "mpg",
		options: [ {
			id: 1,
			title: "< 10",
			start: 0,
			end: 10
		}, {
			id: 2,
			title: "11 - 17",
			start: 11,
			end: 17
		}, {
			id: 3,
			title: "18 - 25",
			start: 18,
			end: 25
		}, {
			id: 4,
			title: "26 - 32",
			start: 26,
			end: 32
		}, {
			id: 5,
			title: "33+",
			start: 32,
			end: null
		} ]
	},
	{ 
		title: "Cylinders", 
		key: "cyl",
		options: [ {
			id: 1,
			title: "< 4",
			start: 0,
			end: 4
		}, {
			id: 2,
			title: "5 - 7",
			start: 5,
			end: 7
		}, {
			id: 3,
			title: "8+",
			start: 8,
			end: null
		} ]
	},
	{ 
		title: "Autonomous Cruise Control", 
		key: "acc",
		options: [ {
			id: 1,
			title: "< 10",
			start: 0,
			end: 10
		}, {
			id: 2,
			title: "11 - 20",
			start: 11,
			end: 20
		}, {
			id: 3,
			title: "21+",
			start: 21,
			end: null
		} ]
	},
	{ 
		title: "Digital Signal Processors", 
		key: "dsp",
		options: [ {
			id: 1,
			title: "< 99",
			start: 0,
			end: 99
		}, {
			id: 2,
			title: "100 - 200",
			start: 100,
			end: 199
		}, {
			id: 3,
			title: "200 - 399",
			start: 200,
			end: 399
		}, {
			id: 4,
			title: "400+",
			start: 400,
			end: null
		} ]
	},
	{ 
		title: "Weight (lbs)", 
		key: "lbs",
		options: [ {
			id: 1,
			title: "0 - 2000",
			start: 0,
			end: 2000
		}, {
			id: 2,
			title: "2001 - 3000",
			start: 2001,
			end: 3000
		}, {
			id: 3,
			title: "3001 - 4000",
			start: 3001,
			end: 4000
		}, {
			id: 4,
			title: "4000+",
			start: 4000,
			end: null
		} ]
	},
	{ 
		title: "Horsepower", 
		key: "hp",
		options: [{
			id: 1,
			title: "< 85",
			start: 0,
			end: 85
		}, {
			id: 2,
			title: "86 - 120",
			start: 86,
			end: 120
		}, {
			id: 3,
			title: "121 - 150",
			start: 121,
			end: 150
		}, {
			id: 4,
			title: "151+",
			start: 151,
			end: null
		} ]
	}
];

export default categories;