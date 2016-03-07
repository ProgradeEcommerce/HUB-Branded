four51.app.directive('logoBar', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/logobarView.html',
	    controller: ['$scope', '$location', function($scope, $location) {
	        $scope.goHome = function() {
	            $location.path('landing');
	        }
	    }]
    }
    return obj;
});