'use strict';

juke.controller('SidebarCtrl', function ($scope, $rootScope, $state) {

	$scope.viewAlbums = function () {
		$state.go('albums');
	};

	$scope.viewAllArtists = function () {
		$state.go('artists');
	};


});
