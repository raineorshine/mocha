describe('should only run .only test in this bdd suite', function() {
  it('should not run this test', function() {
    var zero = 0;
    expect(zero).to.equal(1, 'this test should have been skipped');
  });
  it.only('should run this test', function() {
    var zero = 0;
    expect(zero).to.equal(0, 'this .only test should run');
  });
  it('should run this test, not (includes the title of the .only test)', function() {
    var zero = 0;
    expect(zero).to.equal(1, 'this test should have been skipped');
  });
});
