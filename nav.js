var printArray = function(arr) {
	console.log(arr.join('\n'))
}

var Utils = {
	Text : {
		trySplit : function(param, sep) {
			return typeof(_contextParts) === "String" ?  
						param.split('/') : param;
		}
	}
}

var NavigationContext = (function(locationParts){
	locationParts = Utils.Text.trySplit(locationParts, '/');
	if (!typeof(locationParts))
	var _contextParts = locationParts || [];

	var locationDiff = function(locationParts) {
		var result = [], i = 0;
		while (i < locationParts.length && 
				i < _contextParts[i] &&
				locationParts[i] == _contextParts[i]) i++;

		while (i < locationParts.length) {
			result.push(locationParts[i]);
			i++;
		}
	}

	return {
		locationDiff : locationDiff
	};
}());

navigation = (function() {
	var _currentContext = new NavigationContext();
	
	var navTo = function(locator) {
		var locationDiff = _currentContext.locationDiff(locator);

		

	}
}())

// /facebook -> /news/2/article1/map
// /news/2/article1/map -> /facebook 