'use strict';

juke.config(function ($stateProvider) {

  $stateProvider

  .state('playlist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistsCtrl'
  })

  .state('singleplaylist', {
  	url: '/playlists/:id',
  	templateUrl: '/js/playlist/templates/singleplaylist.html',
  	controller: 'SinglePlaylistCtrl',
  	resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.id);
      }
    }
  })


});





