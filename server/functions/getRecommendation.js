var request_yelp = require('./request_yelp');

module.exports = function(requestObj,res,diners){ //account for multiple diners

	request_yelp(requestObj,function(yelpErr,yelpRes,yelpBody){
		if (yelpErr){
			console.log('error finding businesses');
			res.send(yelpErr);
		}
		var parsed = JSON.parse(yelpBody);
		var businesses = parsed.businesses;

		console.log('parsed businesses: ', businesses);

		businesses.forEach(function(business) {
			business.weight = 0;
		})

		for (var i = 0; i < diners.length; i++) {
			businesses.forEach(function(business){ //for each biz
				var categories = business.categories; // obj of cat
				var sum = 0;
				categories.forEach(function(category){ //for each cat
					//second item in cat e.g. japanese vs. category[0] which is Japanese
					var categoryName = category[1]; 
					// for each user {categories: {<categoryoffood>: [<num of times selected>, <num of times seen>]}
					if (diners[i].categories[categoryName]){ 
						var numerator = diners[i].categories[categoryName][0]; 
						var denominator = diners[i].categories[categoryName][1]; 
						sum+=numerator/denominator;
					}
					else {
						sum+=0.5;
					}
				})
				var weight = Math.pow(sum/categories.length+1,4);
				business.weight += weight;
			});
		}
		businesses.forEach(function(business) {
			business.weight = business.weight/diners.length;
		})

		var totalWeight = 0;
		businesses.forEach(function(business){
			totalWeight += business.weight;
		});
		//below returns recommendations in slightly shuffled way so as not to return same list everytime
		var recommendations = [];
		while (businesses.length) {
			var index = Math.random()*totalWeight;
			var current = 0;
			for (var i=0; i<businesses.length; i++){
				current+=businesses[i].weight;
				if (current>index) {
					//var chosen = businesses[i];
					break;
				}
			}
			totalWeight -= businesses[i].weight;
			recommendations.push(businesses.splice(i,1)[0]);
		};

		console.log('recommended order:');
		recommendations.forEach(function(business){
			console.log(business.name,business.weight);
		});

		res.json(recommendations);
	})

}