imageViewer.controller('FetchCtrl', function($scope, $http, items) {
  $scope.provider = 'reddit';

  $scope.fetch = function(provider, area) {
    path = provider + '/' + area;

    $http.get(path)
      .success(function (data) {
        items.createWith(data);
        $scope.currentImage = items.first();
      })
      .error(function () {
        return 'Error on fetching: ' + provider + '/' + area;
      });
  };

  $scope.next = function () {
    $scope.currentImage = items.next();
  };

  $scope.previous = function () {
    $scope.currentImage = items.previous();
  };
});
