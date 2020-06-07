'use strict';

function FCompare(a,b){
  let EPSILON = 0.001;
  return  ( ((a)-EPSILON)<(b) && ((a)+EPSILON)>(b) );
};

function radians(deg){
    return (deg/180.0) * Math.PI;
}

function degrees(rad){
  return (rad / Math.PI) * 180.0;
}

exports.FCompare = FCompare;
exports.radians = radians;
exports.degrees = degrees;
