'use strict';

var controllers = angular.module('imageViewer.controllers', []);

controllers.controller('FetchCtrl', function($scope, $http, items) {
  $scope.provider = 'reddit';

  $scope.fetch = function(provider, area) {
    var path = '/' + provider + '/' + area;

    $http.get(path)
      .success(function (data) {
        items.createWith(data);
        $scope.currentImage = items.first();
      })
  };

  $scope.next = function () {
    $scope.currentImage = items.next();
  };

  $scope.previous = function () {
    $scope.currentImage = items.previous();
  };
});
