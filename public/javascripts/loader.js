var ImageFeed = ImageFeed || {};

ImageFeed.loader = function(viewer) {
  var self = {},
      feeds = [];

  self.add = function(feed_name) {
    feeds.push(feed_name);
  };

  self.feeds = (function () { return feeds; })();

  self.load = function () {
    feeds.forEach(function(feed) {
      $.ajax({ url: feed, success: addToViewer });
    });
  };

  var addToViewer = function(response) {
    viewer.add(response);
  };

  return self;
};
