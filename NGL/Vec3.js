'use strict';

const Util=require('./Util');
const Mat3=require('./Mat3')

class Vec3 {
  constructor(x=0.0,y=0.0,z=0.0){
  
  this.x = parseFloat(x);
  this.y = parseFloat(y);
  this.z = parseFloat(z);
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

  outer(v){
  let result = new Mat3();
  result.set([
              this.x * v.x, this.x * v.y, this.x * v.z,
              this.y * v.x, this.y * v.y, this.y * v.z,
              this.z * v.x, this.z * v.y, this.z * v.z
              ]);
  return result;
  }

  length(){
    return Math.sqrt(this.x*this.x + this.y*this.y + this.z * this.z);
  }

  lengthSquared(){
    return (this.x*this.x + this.y*this.y + this.z * this.z);
  }

  cross(v){
    return new Vec3(this.y*v.z - this.z*v.y,
                    this.z*v.x - this.x*v.z,
                    this.x*v.y - this.y*v.x
                  );
  }

  add(b){
    return new Vec3(this.x+b.x,this.y+b.y,this.z+b.z); 
  }

  addEquals(b){
    this.x+=b.x;
    this.y+=b.y;
    this.z+=b.z; 
  }

  sub(b){
    return new Vec3(this.x-b.x,this.y-b.y,this.z-b.z); 
  }
  
  subEquals(b){
    this.x-=b.x;
    this.y-=b.y;
    this.z-=b.z; 
  }
  mult(b){
    let x=this.x;
    let y=this.y;
    let z=this.z;
    if(typeof(b) === 'number'){
      x*=b;
      y*=b;
      z*=b; 
    }
    else{
      x*=b.x;
      y*=b.y;
      z*=b.z;
      
    }
    return new Vec3(x,y,z);
  }

  multEquals(b){
    if(typeof(b) === 'number'){
      this.x*=b;
      this.y*=b;
      this.z*=b; 
    }
    else{
      this.x*=b.x;
      this.y*=b.y;
      this.z*=b.z;
    }
  }

div(b){
    let x=this.x;
    let y=this.y;
    let z=this.z;
    if(typeof(b) === 'number'){
      x/=b;
      y/=b;
      z/=b; 
    }
    else{
      x/=b.x;
      y/=b.y;
      z/=b.z;
      
    }
    return new Vec3(x,y,z);
  }

  divEquals(b){
    if(typeof(b) === 'number'){
      this.x/=b;
      this.y/=b;
      this.z/=b; 
    }
    else{
      this.x/=b.x;
      this.y/=b.y;
      this.z/=b.z;
    }
  }

  log(){
    console.log('[',this.x,',',this.y,',',this.z,']');
  }

};

module.exports = Vec3;


