function getConfig() {
  var cfg = {
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
        b.ignore('glob')
          .ignore('jade')
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

  if (process.env.CI) {
    cfg.reporters.push('saucelabs');
    cfg.browsers.push('ie8');
    cfg.customLaunchers = {
      ie8: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows XP',
        version: '8'
      }
    };
    cfg.sauceLabs = {
      testName: 'Mocha Browser Tests',
      build: process.env.TRAVIS_BUILD_NUMBER
    };
  }
  return cfg;
}

getConfig.uiFixturePaths = {
  bdd: './.karma-config/fixture-bdd.js',
  tdd: './.karma-config/fixture-tdd.js',
  exports: './.karma-config/fixture-exports.js',
  qunit: './.karma-config/fixture-qunit.js'
};

module.exports = getConfig;
