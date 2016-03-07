four51.app.directive('orderbilling', ['Address', 'AddressList', function(Address, AddressList) {
	var obj = {
		restrict: 'AE',
		templateUrl: 'partials/controls/orderBilling.html',
		controller: ['$scope', function($scope) {
			AddressList.clear();
			AddressList.billing(function(list) {
				$scope.billaddresses = list;
				if ($scope.isEditforApproval) {
					if (!AddressList.contains($scope.currentOrder.BillAddress))
						$scope.billaddresses.push($scope.currentOrder.BillAddress);
				}
			});
			$scope.billaddress = { Country: 'US', IsShipping: false, IsBilling: true };

			$scope.$on('event:AddressSaved', function(event, address) {
				if (address.IsBilling) {
					$scope.currentOrder.BillAddressID = address.ID;
					$scope.billaddressform = false;
				}

				AddressList.billing(function(list) {
					$scope.billaddresses = list;
					if ($scope.isEditforApproval) {
						$scope.billaddresses.push($scope.currentOrder.BillAddress);
					}
				});
				$scope.billaddress = { Country: 'US', IsShipping: false, IsBilling: true };
			});

			$scope.$watch('currentOrder.BillAddressID', function(newValue) {
				if (newValue) {
					Address.get(newValue, function(add) {
						if ($scope.user.Permissions.contains('EditBillToName') && !add.IsCustEditable) {
							$scope.currentOrder.BillFirstName = add.FirstName;
							$scope.currentOrder.BillLastName = add.LastName;
						}
						$scope.BillAddress = add;
					});
				}
			});

			$scope.$on('event:AddressCancel', function(event) {
				$scope.billaddressform = false;
			});
			
			$scope.costCenterChange = function() {
				var ccTracker = false
				angular.forEach($scope.billaddresses, function(address) {
					if (ccTracker == false) {
						if ((address.AddressName == 'Glatfelter Sales Materials - Chillicothe' && address.ID == $scope.currentOrder.BillAddressID) || (address.AddressName == 'Glatfelter Sales Materials - Spring Grove' && address.ID == $scope.currentOrder.BillAddressID)) {
							$scope.currentOrder.CostCenter = '9009650';
							ccTracker = true;
						}
						else
							$scope.currentOrder.CostCenter = '';
					}
				});
			}
		}]
	};
	return obj;
}]);

four51.app.directive('billingmessage', function() {
	var obj = {
		restrict: 'E',
		templateUrl: 'partials/messages/billing.html'
	};
	return obj;
});