function getConfig() {
  return {
    frameworks: [
      'source-map-support',
      'browserify',
      'should',
      'mocha'
    ],
    files: [
      './.karma-config/fixture.js',
      'test/acceptance/*.js'
    ],
    exclude: [
      'test/acceptance/http.js',
      'test/acceptance/fs.js',
      'test/acceptance/lookup-files.js',
      'test/acceptance/require/**/*.js',
      'test/acceptance/misc/**/*.js'
    ],
    preprocessors: {
      'test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      configure: function configure(b) {
        b.ignore('fs')
          .ignore('glob')
          .ignore('jade')
          .ignore('path')
          .ignore('supports-color')
          .exclude('./lib-cov/mocha');
      }
    },
    reporters: ['mocha-clean'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  };
}

getConfig.uiFixturePaths = {
  bdd: './.karma-config/fixture-bdd.js',
  tdd: './.karma-config/fixture-tdd.js',
  exports: './.karma-config/fixture-exports.js',
  qunit: './.karma-config/fixture-qunit.js'
};

module.exports = getConfig;
