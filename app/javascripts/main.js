var imageViewer = angular.module('imageViewer', [
    'ui.keypress',
    'imageViewer.controllers',
    'imageViewer.services']);

imageViewer.directive('loader', function (loadingNotifier) {
  return function(scope, elem) {
    elem.removeClass('pace-active');

    loadingNotifier.onStart(scope, function () {
      elem.addClass('pace-active');
    });

    loadingNotifier.onStop(scope, function () {
      elem.removeClass('pace-active');
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
