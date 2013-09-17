'use strict';

describe('FetchCtrl', function () {
  var scope, items;

  beforeEach(module('imageViewer'));
  beforeEach(inject(function($rootScope, $controller) {
    items = jasmine.createSpyObj('items', ['createWith', 'first', 'next', 'previous']);
    scope = $rootScope.$new();
    $controller('FetchCtrl', { $scope: scope, items: items });
  }));

  it('makes reddit the default provider', function () {
    expect(scope.provider).toEqual('reddit');
  });

  describe('images', function () {
    var $_httpBackend;

    beforeEach(inject(function($httpBackend) {
      items.first.andReturn(imageInfoFor('first'));

      $_httpBackend = $httpBackend;
      $_httpBackend.when('GET', '/a_provider/an_area').respond(200, 'the response');

      scope.fetch('a_provider', 'an_area');

      $_httpBackend.flush();
    }));

    it('fetches images from a provider in a given area', function () {
      $_httpBackend.expectGET('/a_provider/an_area');
    });

    it('creates items with the result', function () {
      expect(items.createWith).toHaveBeenCalledWith('the response');
    });

    it('sets the first image as current image', function () {
      expect(scope.currentImage).toEqual({ image_url: 'first', title: 'first' });
    });

    it('moves to next image', function () {
      items.next.andReturn(imageInfoFor('next'));

      scope.next();

      expect(items.next).toHaveBeenCalled();
      expect(scope.currentImage).toEqual({ image_url: 'next', title: 'next' });
    });

    it('moves to previous image', function () {
      items.previous.andReturn(imageInfoFor('previous'));

      scope.previous();

      expect(items.previous).toHaveBeenCalled();
      expect(scope.currentImage).toEqual({ image_url: 'previous', title: 'previous' });
    });

  });

  var imageInfoFor = function(url) {
    return { image_url: url, title: url };
  };

});
