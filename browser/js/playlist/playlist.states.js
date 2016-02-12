'use strict';

juke.config(function ($stateProvider) {

  $stateProvider

  .state('playlist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl'
  });


});







