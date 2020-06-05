'use strict';

const assert = require('assert');
const Vec3 = require('./Vec3');
cinst Mat4 = require('./Mat3');

describe('Vec3', function() {
  describe('constructor', function() {
    it('default Vec3 x=y=z === 0.0', function() {
      let vec = new Vec3();
      assert.equal(vec.x , 0.0);
      assert.equal(vec.y , 0.0);
      assert.equal(vec.z , 0.0);
      
    });
  });
  describe('user defined ctor ', function() {
      it('init with 1,2,3', function() {
        let vec = new Vec3(1.0,2.0,3.0);
        assert.equal(vec.x , 1.0);
        assert.equal(vec.y , 2.0);
        assert.equal(vec.z , 3.0);        
      });
    });

    describe('non float should convert to float', function() {
      it('init with "1",2,"0.04"', function() {
        let vec = new Vec3("1.0",2,"0.04");
        assert.equal(vec.x , 1.0);
        assert.equal(vec.y , 2.0);
        assert.equal(vec.z , 0.04);        
      });
    });

    describe('set NaN', function() {
      it('init with "One",Two,"Three" result should be NaN as we always convert to float', function() {
        let vec = new Vec3("One","Two","Three");
        assert(isNaN(vec.x));
        assert(isNaN(vec.y));
        assert(isNaN(vec.z));
      });
    });

    describe('null', function() {
      it('init with values and null', function() {
        let vec = new Vec3(1,2,3);
        vec.null();
        assert.equal(vec.x , 0.0);
        assert.equal(vec.y , 0.0);
        assert.equal(vec.z , 0.0);        
      });
    });

    describe('normalize', function() {
      it('normalize the vector', function() {
        let vec = new Vec3(22.3,0.5,10.0);
        vec.normalize();
        let result= new Vec3(0.912266,0.0204544,0.409088);
        assert(vec.equals(result) );
      });
    });
    describe('dot product', function() {
      it('dot product', function() {
        let a = new Vec3(1.0,2.0,3.0);
        let b= new Vec3(4.0,5.0,6.0);
        assert.equal(a.dot(b),32.0 );
      });
    });
    describe('inner', function() {
      it('the inner product of the vector', function() {
        let a = new Vec3(1.0,2.0,3.0);
        let b= new Vec3(3.0,4.0,5.0);
        
        assert.equal(a.inner(b),26.0);
      });
    });

    describe('inner', function() {
      it('the inner product of the vector', function() {
        let a = new Vec3(1.0,2.0,3.0);
        let b= new Vec3(3.0,4.0,5.0);
        let outer=a.outer(b);
        let result = new Mat3();
        result.set(3.0,4.0,5.0,6.0,8.0,10.0,9.0,12.0,15.0);
        assert(a.equals(b));
      });
    });




  });

