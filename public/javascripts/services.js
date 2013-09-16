var services = angular.module('imageViewer.services', []);

services.factory('items', function () {
  var self = {},
      selectedIndex = 0,
      currentImage = {},
      images = [];

  self.createWith = function(data) {
    images = data;
    currentImage = self.first();
  };

  self.next = function () {
    selectedIndex = selectedIndex + 1;
    return images[selectedIndex];
  };

  self.previous = function () {
    selectedIndex = selectedIndex - 1;
    return images[selectedIndex];
  };

  self.first = function () {
    return images[0];
  };

  return self;
});

