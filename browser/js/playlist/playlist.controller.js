'use strict';

juke.controller('PlaylistsCtrl', function ($scope, PlaylistFactory) {
	
	//ng-show for the form data
	$scope.goAway = true;

	$scope.click = function() {
		//toggle the form data 
		$scope.goAway = !$scope.goAway;
		PlaylistFactory.create($scope.playlist)
		.then(function(data) {
			console.log("this is what was saved", data);
			$scope.playlist.name = "";
			$scope.playlistForm.$setPristine(true);
		// 	return PlaylistFactory.fetchAll();
		// })
		// .then(function(data) {
		// 	console.log(data);
		})
	};
});

juke.controller('SinglePlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist) {
	$scope.thePlaylist = thePlaylist;
});

juke.controller('PlaylistListCtrl', function ($scope, PlaylistFactory) {
	
	PlaylistFactory.fetchAll()
	.then(function(data) {
		$scope.playlistList = data;
	});
	
});