'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'gulpAngular'
    },

<% if(props.jsPreprocessor.key === 'traceur') { %>
    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
<% } else { %>
    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
<% } %>
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    }
  });
};
