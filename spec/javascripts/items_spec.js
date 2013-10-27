'use strict';

describe('items', function () {
  var $items;

  beforeEach(module('imageViewer.services'));
  beforeEach(inject(function(items) {
    $items = items;
  }));

  it('creates itself with given data and make the first item its current', function () {
    $items.createWith(someImages);

    expect($items.first()).toEqual({ image_url: 'first.jpg', title: 'first' });
  });

  it('returns the total count of images', function () {
    $items.createWith(someImages);
    expect($items.count()).toBe(4);
  });

  it('returns the position of the selected image', function () {
    $items.createWith(someImages);
    $items.next();

    expect($items.selected()).toBe(1);
  });

  describe('navigation', function () {
    beforeEach(function () {
      $items.createWith(someImages);
    });

    it('returns the next', function () {
      expect($items.next()).toEqual(imageInfoFor('second'));
    });

    it('returns the previous', function () {
      $items.next();

      expect($items.previous()).toEqual(imageInfoFor('first'));
    });

    it('does not go to previous if already in the first', function () {
      expect($items.previous()).toEqual(imageInfoFor('first'));
    });

    it('does not move to next if already in the last', function () {
      goToLast();
      expect($items.next()).toEqual(imageInfoFor('fourth'));
    });

  });

  var imageInfoFor = function(url) {
    return { image_url: url + '.jpg', title: url };
  };

  var goToLast = function () {
      $items.next();
      $items.next();
      $items.next();
  };

  var someImages = [
    imageInfoFor('first'),
    imageInfoFor('second'),
    imageInfoFor('third'),
    imageInfoFor('fourth')
  ];
});
