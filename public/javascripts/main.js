$(document).ready(function () {
  var loader = ImageFeed.loader(ImageFeed.viewer());

  loader.add('reddit/funny');
  loader.load();
});
