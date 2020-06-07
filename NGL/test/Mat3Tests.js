'use strict';

const assert =  require('chai').assert
const expect  = require('chai').expect;
const chai = require('chai');
const Mat3 = require('../Mat3')
const Util = require('../Util')

describe('Mat3 class Tests', () => {
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
 
    describe('equals', () => {
      it('test equals function', () => {
        let a = new Mat3();
        let b = new Mat3();
        assert(a.equals(b));
      });
    });


  describe('not equals', () => {
    it('test equals fails function', () => {
      let a = new Mat3();
      let b = new Mat3();
      b.set([1,2,3,4,5,6,7,8,9]);
      assert(!a.equals(b));
    });
  });

  describe('set', () => {
    it('test set and equals', () => {
      let a = new Mat3();
      let b = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      b.set([1,2,3,4,5,6,7,8,9]);
      assert(a.equals(b));
    });
  });
  describe('set throws', ()=> {
    it('set throws', ()=> {
      chai.expect( ()=>{ 
              let a = new Mat3();
             a.set([1,2,3,4,5,6]);
      }).to.throw();
    });
  });

  describe('identity', () => {
    it('set to identity', () => {
      let a = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      a.identity();
      assert(a.equals(new Mat3()));
    });
  });

  describe('null', () => {
    it('set to null (all 0)', () => {
      let a = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      a.null();
      let b= new Mat3();
      b.set([0,0,0,0,0,0,0,0,0]);
      assert(a.equals(b));
    });
  });
  describe('transpose', () => {
    it('transpose matrix', () => {
      let a = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      a.transpose();
      let b= new Mat3();
      b.set([1,4,7,2,5,8,3,6,9]);
      assert(a.equals(b));
    });
  });

  describe('transpose', () => {
    it('transpose matrix', () => {
      let a = new Mat3();
      a.set([1,2,3,4,5,6,7,8,9]);
      a.transpose();
      let b= new Mat3();
      b.set([1,4,7,2,5,8,3,6,9]);
      assert(a.equals(b));
    });
  });

  describe('scale', () => {
    it('set matrix as scale', () => {
      let a = new Mat3();
      a.scale(0.2,0.3,0.4);
      assert(Util.FCompare(a.m[0],0.2));
      assert(Util.FCompare(a.m[1],0.0));
      assert(Util.FCompare(a.m[2],0.0));
      assert(Util.FCompare(a.m[3],0.0));
      assert(Util.FCompare(a.m[4],0.3));
      assert(Util.FCompare(a.m[5],0.0));
      assert(Util.FCompare(a.m[6],0.0));
      assert(Util.FCompare(a.m[7],0.0));
      assert(Util.FCompare(a.m[8],0.4));
    });
  });

  describe('rotateX', () => {
    it('set matrix as rotation X degrees', () => {
      let a = new Mat3();
      a.rotateX(45.0);
      let result= new Mat3();
      result.set([1.0,0.0,0.0,0.0,0.707107,0.707107,0.0,-0.707107,0.707107]);
      
      assert(a.equals(result));
      
    });
  });

}); // end tests
