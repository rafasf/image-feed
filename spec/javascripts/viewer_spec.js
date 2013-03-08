
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

    viewer.add({ image_url: 'an image url' });
    viewer.render();

    expect($('#content')).toHaveHtml('<img src="an image url" />');
  });
});
