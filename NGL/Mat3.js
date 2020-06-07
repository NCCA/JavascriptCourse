'use strict';

const Util=require('./Util');

class Mat3 {
  constructor(x=1.0){
  this.m =new Float32Array([  x,0.0,0.0,
           0.0,  x,0.0,
           0.0,0.0,  x]);
  };

  identity(){
    this.m =new Float32Array([1.0,0.0,0.0,
             0.0,1.0,0.0,
             0.0,0.0,1.0]);
  }
  equals(v){
    return this.m.every( function(el,index){
      return Util.FCompare(el,v.m[index]);
    });
  }

  log(){
    console.log(this.m)
  }

  set(x){
    if (x.length != 9)
    {
      throw 'Mat3.set takes 9 float parameters'
    }
    this.m=new Float32Array(x);
  }

  null(){
    this.m= new Float32Array(0,0,0,0,0,0,0,0,0);
  }

  transpose(){
    let tmp =Float32Array.from(this.m); // can also do [...this.m];
    this.m[0]=tmp[0];
    this.m[1]=tmp[3];
    this.m[2]=tmp[6];
    this.m[3]=tmp[1];
    this.m[4]=tmp[4];
    this.m[5]=tmp[7];
    this.m[6]=tmp[2];
    this.m[7]=tmp[5];
    this.m[8]=tmp[8];
  }

  scale(sx,sy,sz){
    this.m = new Float32Array( [sx,0.0,0.0,
                              0.0, sy,0.0,
                              0.0,0.0, sz]);
  }

  rotateX(deg){
    this.identity();
    let beta=Util.radians(deg);
    let sr = Math.sin( beta );
    let cr = Math.cos( beta );    
    this.m[4] =  cr;
	  this.m[5] =  sr;
	  this.m[7]=  -sr;
	  this.m[8] =  cr;
  }

};
module.exports = Mat3;
