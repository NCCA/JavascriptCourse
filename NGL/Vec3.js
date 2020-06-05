'use strict';

const Util=require('./Util');

class Vec3 {
  constructor(x=0.0,y=0.0,z=0.0){
  
  this.x = parseFloat(x);
  this.y = parseFloat(y);
  this.z =parseFloat(z);
  };
 
  null(){
    this.x=0.0;
    this.y=0.0;
    this.z=0.0;
  }

  normalize()
  {
    let len=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
    this.x/=len;
    this.y/=len;
    this.z/=len;
  }

  equals(v)  {
    return (Util.FCompare(this.x, v.x) && Util.FCompare(this.y, v.y) && Util.FCompare(this.z, v.z));
  }

  dot(v){
    return (this.x * v.x + this.y * v.y + this.z * v.z);
  }

  inner(v){
    return ((this.x * v.x) +(this.y * v.y) + (this.z * v.z));
  }

  log(){
    console.log('[',this.x,',',this.y,',',this.z,']');
  }

};


module.exports = Vec3;


