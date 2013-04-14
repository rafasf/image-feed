var ImageFeed = ImageFeed || {};

ImageFeed.viewer = function () {
  var self = {},
      images = [],
      notLoaded = [];

  self.add = function(url) {
    images.push(url);
    addToPage({ image_url: url });
  };

  self.images = (function () { return images; })();
  self.nonLoadedFeeds = (function () { return notLoaded; })();

  self.addToNotLoaded = function(url) {
    notLoaded.push(url);
  };

  var addToPage = function(feedImage) {
    var image = $('<img />').attr('src', feedImage['image_url']);
    $('#content').append(image);
  };

  return self;
};
