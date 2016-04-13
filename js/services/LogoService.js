four51.app.factory('LogoService', ['$sce', 'Resources', function($sce, Resources){
	
	function _isLogoOnlyProduct(specs){
		var searchResult = true;
		var allLogos = Resources.logoSpecs;
		console.log(specs)
		angular.forEach(specs, function(spec){
		    console.log(allLogos[spec.Name]);
			if (spec.VariantAvailability == 'Available' && !allLogos[spec.Name])
			//if (!allLogos[spec.Name])
				searchResult = false;
		});
		console.log(searchResult);
		return searchResult;
	};
	
	return{
		isLogoOnlyProduct: _isLogoOnlyProduct
	}
	
}]);