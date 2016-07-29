var expect = require('chai').expect;

describe("dos", function(){
  it("adds 1 and 1", function(){
    expect(1+1).to.equal(2)
  });
  it('is a number', function(){
    expect(2).to.be.a('number')
  })
});