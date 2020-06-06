'use strict';

const assert =  require('chai').assert
const expect  = require('chai').expect;
const chai = require('chai');
const Mat3 = require('../Mat3')

describe('Mat3', () => {
  describe('constructor', () => {
    it('default Mat3 Identity', () => {
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
 
  describe('Mat3', () => {
    describe('equals', () => {
      it('test equals function', () => {
        let a = new Mat3();
        let b = new Mat3();
        assert(a.equals(b));
      });
    });
});

describe('Mat3', () => {
  describe('not equals', () => {
    it('test equals fails function', () => {
      let a = new Mat3();
      let b = new Mat3();
      b.set([1,2,3,4,5,6,7,8,9]);
      assert(!a.equals(b));
    });
  });
});

describe('Mat3', () => {
  describe('set', () => {
    it('test set and equals', () => {
      let a = new Mat3();
      let b = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      b.set([1,2,3,4,5,6,7,8,9]);
      assert(a.equals(b));
    });
  });
});

describe('Mat3',()=> {
  describe('set throws', ()=> {
    it('set throws', ()=> {
      chai.expect( ()=>{ 
              let a = new Mat3();
             a.set([1,2,3,4,5,6]);
      }).to.throw();
    });
  });
});

describe('Mat3', () => {
  describe('identity', () => {
    it('set to identity', () => {
      let a = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      a.identity();
      assert(a.equals(new Mat3()));
    });
  });
});

});
