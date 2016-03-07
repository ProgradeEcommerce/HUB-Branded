four51.app.controller('kitProductViewCtrl', ['$routeParams', '$scope', 'KitProductDisplayService', 'Order', 'User', '$location', '$route', function ($routeParams, $scope, KitProductDisplayService) {
	$scope.LineItem = {};
	$scope.LineItem.Product = $scope.p;
	KitProductDisplayService.setNewLineItemScope($scope);
	KitProductDisplayService.setProductViewScope($scope);
}]);