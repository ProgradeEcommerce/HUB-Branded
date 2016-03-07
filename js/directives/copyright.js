four51.app.directive('copyright', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/copyrightView.html',
	    controller: ['$scope', '$location', function($scope, $location) {
			var d = new Date();
		    $scope.year = d.getFullYear();
			
			$scope.hideLogo = function () {
				if ($location.path().indexOf('landing') != -1)
            		return 'ng-hide';
			}
	    }]
    }
    return obj;
});