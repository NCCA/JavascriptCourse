'use strict';

const Util=require('./Util');

class Mat3 {
  constructor(x=1.0){
  this.m =[  x,0.0,0.0,
           0.0,  x,0.0,
           0.0,0.0,  x];
  };

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
    this.m=x;
  }

};
module.exports = Mat3;
