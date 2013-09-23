module.exports = function(config){
  config.set({
    basePath : '../',

    files: [
      'public/javascripts/lib/angular.min.js',
      'public/javascripts/lib/ui-utils.min.js',
      'spec/javascripts/angular/angular-mocks.js',
      'public/javascripts/*.js',
      'spec/javascripts/*.js'
    ],

    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
})};
