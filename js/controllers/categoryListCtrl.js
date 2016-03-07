four51.app.controller('categoryListCtrl', [ '$scope', function ($scope) {
	$scope.whatColor = function(index) {
	    if (index == 0)
			return 'category-0';
	    else if (index == 1)
			return 'category-1';
	    else if (index == 2)
			return 'category-2';
		else
			return 'category-0';
	}
}]);