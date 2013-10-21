'use strict';

var controllers = angular.module('imageViewer.controllers', []);

controllers.controller('FetchCtrl', function($scope, $http, items, loadingNotifier) {
  $scope.provider = 'reddit';
  $scope.currentImage = {};

  $scope.fetch = function(provider, area) {
    loadingNotifier.start();
    var path = '/' + provider + '/' + area;

    $http.get(path)
      .success(function (data) {
        items.createWith(data);
        $scope.currentImage = items.first();
        loadingNotifier.stop();
      })
  };

  $scope.next = function () {
    loadingNotifier.start();
    $scope.currentImage = items.next();
  };

  $scope.previous = function () {
    loadingNotifier.start();
    $scope.currentImage = items.previous();
  };

  $scope.fetch($scope.provider, 'funny');
});
