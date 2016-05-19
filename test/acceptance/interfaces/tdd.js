suite('Array', function(){
  suite('#indexOf()', function(){
    var initialValue = 32;

    suiteSetup(function(done){
      expect(initialValue).to.eql(32);
      initialValue = 42;
      done();
    });

    test('should return -1 when the value is not present', function(){
      expect(initialValue).to.eql(42);
      expect([1,2,3].indexOf(5)).to.equal(-1);
      expect([1,2,3].indexOf(0)).to.equal(-1);
    });

    test('should return the correct index when the value is present', function(){
      expect(initialValue).to.eql(42);
      expect([1,2,3].indexOf(1)).to.equal(0);
      expect([1,2,3].indexOf(2)).to.equal(1);
      expect([1,2,3].indexOf(3)).to.equal(2);
    });

    test.skip('should skip this test', function(){
      var zero = 0;
      expect(zero).to.equal(1, 'this test should have been skipped');
    });

    suite.skip('should skip this suite', function(){
      test('should skip this test', function(){
        var zero = 0;
        expect(zero).to.equal(1, 'this test should have been skipped');
      });
    });

    suiteTeardown(function(done){
      expect(initialValue).to.eql(42);
      done();
    });
  });
});
