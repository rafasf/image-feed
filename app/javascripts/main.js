var imageViewer = angular.module('imageViewer', [
    'ui.keypress',
    'imageViewer.controllers',
    'imageViewer.services']);

imageViewer.directive('loader', function (loadingNotifier) {
  return function(scope, elem) {
    elem.css('visibility', 'hidden');

    loadingNotifier.onStart(scope, function () {
      elem.css('visibility', 'visible');
    });

    loadingNotifier.onStop(scope, function () {
      elem.css('visibility', 'hidden');
    });
  };
});

imageViewer.directive('loadable', function(loadingNotifier) {
  return function(scope, elem) {
    elem.css('visibility', 'hidden');
    elem.bind('load', function () {
      loadingNotifier.stop();
      elem.css('visibility', 'visible');
    });
  };
});
