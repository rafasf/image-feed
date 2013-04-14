var ImageFeed = ImageFeed || {};

ImageFeed.loader = function(viewer) {
  var self = {},
      feeds = [];

  self.add = function(feed_name) {
    feeds.push(feed_name);
  };

  self.feeds = (function () { return feeds; })();

  self.load = function () {
    feeds.forEach(function(feed) { load(feed); });
  };

  var load = function(url) {
    $.ajax({ url: url, success: addToViewer, error: function() { addToNotLoaded(url); } });
  };

  var addToViewer = function(response) {
    response.map(viewer.add);
  };

  var addToNotLoaded = function(url) {
    viewer.addToNotLoaded(url);
  };

  return self;
};
