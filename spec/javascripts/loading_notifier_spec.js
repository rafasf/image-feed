describe('loading notifier', function () {
  var scope, $loadingNotifier;

  beforeEach(module('imageViewer.services'));
  beforeEach(inject(function(loadingNotifier) {
    $loadingNotifier = loadingNotifier;
  }));

  it('broadcasts an loading start event', inject(function ($rootScope) {
    spyOn($rootScope, '$broadcast');

    $loadingNotifier.start();

    expect($rootScope.$broadcast).toHaveBeenCalledWith('loadStart');
  }));

  it('broadcasts an loading stop event', inject(function ($rootScope) {
    spyOn($rootScope, '$broadcast');

    $loadingNotifier.stop();

    expect($rootScope.$broadcast).toHaveBeenCalledWith('loadStop');
  }));

  it('calls the subscribed handler when loading starts', inject(function ($rootScope) {
    aHandler = jasmine.createSpy('blah');

    $loadingNotifier.onStart($rootScope, aHandler);
    $loadingNotifier.start();

    expect(aHandler).toHaveBeenCalled();
  }));

  it('calls the subscribed handler when loading stops', inject(function ($rootScope) {
    aHandler = jasmine.createSpy('blah');

    $loadingNotifier.onStop($rootScope, aHandler);
    $loadingNotifier.stop();

    expect(aHandler).toHaveBeenCalled();
  }));

});
