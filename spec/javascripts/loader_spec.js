describe('loader', function () {
  var loader,
      viewer;

  beforeEach(function () {
    viewer = jasmine.createSpyObj('viewer', ['add', 'render', 'addToNotLoaded']);
    loader = ImageFeed.loader(viewer);
  });

  it('accepts new feed name', function () {
    loader.add('reddit/funny');

    expect(loader.feeds.length).toBe(1);
    expect(loader.feeds[0]).toBe('reddit/funny');
  });

  describe('load', function () {

    it('gets the response and add to the viewer', function () {
      loader.add('first feed');

      spyOn($, 'ajax').andCallFake(
        function(opts) { opts.success(['something']); }
      );

      loader.load();

      expect($.ajax.calls[0].args[0]['url']).toBe('first feed');
      expect(viewer.add).toHaveBeenCalledWith('something', 0, ['something']);
    });

    it('adds to fail list if not loaded propertly', function() {
      loader.add('a feed');

      spyOn($, 'ajax').andCallFake(
        function(opts) { opts.error(); }
      );

      loader.load();

      expect(viewer.addToNotLoaded).toHaveBeenCalledWith('a feed');
    });

  });

});
