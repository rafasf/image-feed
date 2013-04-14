var viewer = ImageFeed.viewer();
var loader = ImageFeed.loader(viewer);
loader.add('reddit/funny');

$(document).ready(function () {
  loader.load();
});
