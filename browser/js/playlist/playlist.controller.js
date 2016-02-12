'use strict';

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
	
	$scope.click = function() {
		console.log($scope.playlist);
		PlaylistFactory.create($scope.playlist)
		.then(function() {
			$scope.playlist.name = "";
			$scope.playlistForm.$setPristine(true);
			return PlaylistFactory.getAll();
		})
		.then(function(data) {
			$scope.allPlaylists = data;
			console.log(data);
			console.log($scope.allPlaylists)
		});
		
	};
	// database is now being populated
	
});