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
    var image = $('<img />').attr('src', url);
    $('#content').append(image);
  };

  return self;
};

describe('viewer', function () {
  beforeEach(function () {
    setFixtures('<div id="content"></div>');
  });

  it('accepts new entries to be added', function () {
    var viewer = ImageFeed.viewer();

    viewer.add('an image url');

    expect(viewer.images[0]).toBe('an image url');
  });

  it('adds images on the page', function () {
    var viewer = ImageFeed.viewer();

    viewer.add('an image url');
    viewer.render();

    expect($('#content')).toHaveHtml('<img src="an image url" />');
  });
});
