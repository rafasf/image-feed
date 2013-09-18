var services = angular.module('imageViewer.services', []);

services.factory('items', function () {
  var self = {},
      selectedIndex = 0,
      images = [];

  var validIndexFor = function(indexCandidate) {
    if (indexCandidate >= images.length || indexCandidate < 0) {
      return selectedIndex;
    } else {
      return indexCandidate;
    }
  };

  self.createWith = function(data) {
    images = data;
  };

  self.next = function () {
    selectedIndex = validIndexFor(selectedIndex + 1);
    return images[selectedIndex];
  };

  self.previous = function () {
    selectedIndex = validIndexFor(selectedIndex - 1);
    return images[selectedIndex];
  };

  self.first = function () {
    return images[0];
  };

  return self;
});

