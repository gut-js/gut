module.exports = function(obj){
	var history = [];
	for (var key in obj){
		if (key !== 'test'){
			history.push(obj[key]);
		}
	}

	history.sort(function(a,b){
		return b.date-a.date;
	})
	return history;
}