var utils = require('../../lib/utils');

describe('lookupFiles', function() {
  var fs = require('fs'), path = require('path'), existsSync = fs.existsSync ||
    path.existsSync;

  beforeEach(function() {
    fs.writeFileSync('/tmp/mocha-utils.js', 'yippy skippy ying yang yow');
    fs.symlinkSync('/tmp/mocha-utils.js', '/tmp/mocha-utils-link.js');
  });

  it('should not choke on symlinks', function() {
    utils.lookupFiles('/tmp', ['js'], false)
      .should
      .containEql('/tmp/mocha-utils-link.js')
      .and
      .containEql('/tmp/mocha-utils.js')
      .and
      .have
      .lengthOf(2);
    existsSync('/tmp/mocha-utils-link.js')
      .should
      .be
      .true();
    fs.renameSync('/tmp/mocha-utils.js', '/tmp/bob');
    existsSync('/tmp/mocha-utils-link.js')
      .should
      .be
      .false();
    utils.lookupFiles('/tmp', ['js'], false)
      .should
      .eql([]);
  });

  it('should accept a glob "path" value', function() {
    utils.lookupFiles('/tmp/mocha-utils*', ['js'], false)
      .should
      .containEql('/tmp/mocha-utils-link.js')
      .and
      .containEql('/tmp/mocha-utils.js')
      .and
      .have
      .lengthOf(2);
  });

  afterEach(function() {
    [
      '/tmp/mocha-utils.js',
      '/tmp/mocha-utils-link.js',
      '/tmp/bob'
    ].forEach(function(path) {
      try {
        fs.unlinkSync(path);
      } catch (ignored) {
      }
    });
  });
});
