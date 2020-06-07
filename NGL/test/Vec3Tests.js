'use strict';

const assert = require('assert');
const Vec3 = require('../Vec3');
const Mat3 = require('../Mat3');
const Util = require('../Util');


describe('Vec3 class tests', () => {
  describe('constructor', () => {
    it('default Vec3 x=y=z === 0.0', () => {
      let vec = new Vec3();
      assert.equal(vec.x , 0.0);
      assert.equal(vec.y , 0.0);
      assert.equal(vec.z , 0.0);
      
    });
  });
  describe('user defined ctor ', () => {
      it('init with 1,2,3', () => {
        let vec = new Vec3(1.0,2.0,3.0);
        assert.equal(vec.x , 1.0);
        assert.equal(vec.y , 2.0);
        assert.equal(vec.z , 3.0);        
      });
    });

    describe('non float should convert to float', () => {
      it('init with "1",2,"0.04"', () => {
        let vec = new Vec3("1.0",2,"0.04");
        assert.equal(vec.x , 1.0);
        assert.equal(vec.y , 2.0);
        assert.equal(vec.z , 0.04);        
      });
    });

    describe('set NaN', () => {
      it('init with "One",Two,"Three" result should be NaN as we always convert to float', () => {
        let vec = new Vec3("One","Two","Three");
        assert(isNaN(vec.x));
        assert(isNaN(vec.y));
        assert(isNaN(vec.z));
      });
    });

    describe('null', () => {
      it('init with values and null', () => {
        let vec = new Vec3(1,2,3);
        vec.null();
        assert.equal(vec.x , 0.0);
        assert.equal(vec.y , 0.0);
        assert.equal(vec.z , 0.0);        
      });
    });

    describe('normalize', () => {
      it('normalize the vector', () => {
        let vec = new Vec3(22.3,0.5,10.0);
        vec.normalize();
        let result= new Vec3(0.912266,0.0204544,0.409088);
        assert(vec.equals(result) );
      });
    });
    describe('dot product', () => {
      it('dot product', () => {
        let a = new Vec3(1.0,2.0,3.0);
        let b= new Vec3(4.0,5.0,6.0);
        assert.equal(a.dot(b),32.0 );
      });
    });
    describe('inner', () => {
      it('the inner product of the vector', () => {
        let a = new Vec3(1.0,2.0,3.0);
        let b= new Vec3(3.0,4.0,5.0);
        
        assert.equal(a.inner(b),26.0);
      });
    });

    describe('outer', () => {
      it('the outer product of the vector which returns a mat3', () => {
        let a = new Vec3(1.0,2.0,3.0);
        let b= new Vec3(3.0,4.0,5.0);
        let outer=a.outer(b);
        let result = new Mat3();
        result.set([3.0,4.0,5.0,6.0,8.0,10.0,9.0,12.0,15.0]);
        assert(outer.equals(result));
      });
    });

    describe('length', () => {
      it('the length of the vector', () => {
        let a = new Vec3(22,1,32);
        assert(Util.FCompare(a.length(),38.845));
      });
    });
   describe('lengthSquared', () => {
      it('the lengthSquared of the vector', () => {
        let a = new Vec3(22,1,32);      
        assert(Util.FCompare(a.lengthSquared(),1509.0));
      });
    });

  describe('cross product', () => {
      it('the cross product', () => {
        let a= new Vec3(0,1,0);
        let b= new Vec3(1,0,0);
        let c=a.cross(b);
        assert(c.equals(new Vec3(0,0,-1)));

      });
    });

 describe('add', () => {
      it('add two vectors', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(4,5,6);
        let c=a.add(b);
        assert(c.equals(new Vec3(5,7,9)));

      });
    });

  describe('addEquals', () => {
      it('a+=b', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(4,5,6);
        a.addEquals(b);
        assert(a.equals(new Vec3(5,7,9)));

      });
    });

  describe('minus', () => {
      it('subtract two vectors', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(4,5,6);
        let c=a.sub(b);
        assert(c.equals(new Vec3(-3,-3,-3)));

      });
    });

  describe('minusEquals', () => {
      it('a-=b', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(4,5,6);
        a.subEquals(b);
        assert(a.equals(new Vec3(-3,-3,-3)));

      });
    });

  describe('mult Float', () => {
      it('a*2.0', () => {
        let a= new Vec3(1,2,3);
        let b=a.mult(2.0);
        assert(b.equals(new Vec3(2,4,6)));

      });
    });
  describe('mult Vec', () => {
      it('a*b', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(2,2,2);
        let c=a.mult(b);
        assert(c.equals(new Vec3(2,4,6)));

      });
    });
  describe('mult equalsFloat', () => {
      it('a*=2.0', () => {
        let a= new Vec3(1,2,3);
        a.multEquals(2.0);
        assert(a.equals(new Vec3(2,4,6)));

      });
    });

  describe('mult VecEquals', () => {
      it('a*=b', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(2,2,2);
        a.multEquals(b);
        assert(a.equals(new Vec3(2,4,6)));

      });
    });

 describe('div equalsFloat', () => {
      it('a/=2.0', () => {
        let a= new Vec3(1,2,3);
        a.divEquals(2.0);
        assert(a.equals(new Vec3(0.5,1.0,1.5)));

      });
    });

  describe('div VecEquals', () => {
      it('a/=b', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(2,2,2);
        a.divEquals(b);
        assert(a.equals(new Vec3(0.5,1.0,1.5)));

      });
    });

describe('div Float', () => {
      it('a/2.0', () => {
        let a= new Vec3(1,2,3);
        let b=a.div(2.0);
        assert(b.equals(new Vec3(0.5,1.0,1.5)));

      });
    });
  describe('div Vec', () => {
      it('a/b', () => {
        let a= new Vec3(1,2,3);
        let b= new Vec3(2,2,2);
        let c=a.div(b);
        assert(c.equals(new Vec3(0.5,1.0,1.5)));

      });
    });
  });

