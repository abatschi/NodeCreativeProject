var app = angular.module('app', []);

app.factory('homeworkFetcher', homeworkFetcher);
app.controller('mainCtrl', mainCtrl);

function homeworkFetcher ($http) {
	return {
		get: function () {
			return $http.get('homework').then(function (res) {
				return res.data;
			});
		}
	}
};

function mainCtrl ($scope, homeworkFetcher, $http) {
	$scope.homework = [];

	homeworkFetcher.get().then(function (data) {
		$scope.homework = data;
	});

	$scope.addHomework = function () {
		var newItem = {title: $scope.Title, description: $scope.Description};
	
		$http({
			url: 'addHomework',
			method: 'POST',
			data: newItem
		}).success(function (data, status, headers, config) {
			
		});
	};
};

