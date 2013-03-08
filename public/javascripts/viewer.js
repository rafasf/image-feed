var ImageFeed = ImageFeed || {};

ImageFeed.viewer = function () {
  var self = {},
      images = [];

  self.add = function(url) {
    images.push(url);
  };

  self.render = function () {
    images.map(addToPage);
  };

  self.images = (function () { return images; })();

  var addToPage = function(url) {
    var image = $('<img />').attr('src', url['image_url']);
    $('#content').append(image);
  };

  return self;
};
