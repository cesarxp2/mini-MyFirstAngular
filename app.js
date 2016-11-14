angular.module('friendsList', []);
angular.module('friendsList').controller('mainCtrl', function($scope){
	$scope.friendsArr = ['Jessica', 'Cameron', 'Vianey'];
	
	$scope.addYourFriend = function() {
		$scope.friendsArr.push($scope.addFriend);
		
	}
});
