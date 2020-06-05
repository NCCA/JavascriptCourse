'use strict';

const assert =  require('chai').assert
const expect  = require('chai').expect;
const chai = require('chai');
const Mat3 = require('./Mat3')

describe('Mat3', function() {
  describe('constructor', function() {
    it('default Mat3 Identity', function() {
      let vec = new Mat3();
      assert.equal(vec.m[0],1.0);
      assert.equal(vec.m[1],0.0);
      assert.equal(vec.m[2],0.0);
      assert.equal(vec.m[3],0.0);
      assert.equal(vec.m[4],1.0);
      assert.equal(vec.m[5],0.0);
      assert.equal(vec.m[6],0.0);
      assert.equal(vec.m[7],0.0);
      assert.equal(vec.m[8],1.0);
    });
  });
 
  describe('Mat3', function() {
    describe('equals', function() {
      it('test equals function', function() {
        let a = new Mat3();
        let b = new Mat3();
        assert(a.equals(b));
      });
    });
});

describe('Mat3', function() {
  describe('not equals', function() {
    it('test equals fails function', function() {
      let a = new Mat3();
      let b = new Mat3();
      b.set([1,2,3,4,5,6,7,8,9]);
      assert(!a.equals(b));
    });
  });
});

describe('Mat3', function() {
  describe('set', function() {
    it('test set and equals', function() {
      let a = new Mat3();
      let b = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      b.set([1,2,3,4,5,6,7,8,9]);
      assert(a.equals(b));
    });
  });
});

describe('Mat3', function() {
  describe('set throws', function() {
    it('set throws', function() {
      let a = new Mat3();
      chai.expect( a.set([1,2,3,4,5,6]) ).to.throw('Mat3.set takes 9 float parameters')
    });
  });
});

describe('Mat3', function() {
  describe('identity', function() {
    it('set to identity', function() {
      let a = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      a.identity();
      assert(a.equals(new Mat3()));
    });
  });
});

});
