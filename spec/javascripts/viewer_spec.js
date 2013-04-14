describe('viewer', function () {
  var viewer;

  beforeEach(function () {
    setFixtures('<div id="content"></div>');
    viewer = ImageFeed.viewer();
  });

  it('accepts new entries to be added', function () {
    viewer.add('an image url');

    expect(viewer.images[0]).toBe('an image url');
    expect($('#content')).toHaveHtml('<img src="an image url" />');
  });

  it('allows to add non loaded urls', function () {
    viewer.addToNotLoaded('an url');

    expect(viewer.nonLoadedFeeds).toContain('an url');
  });

});
