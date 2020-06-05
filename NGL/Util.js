'use strict';

function FCompare(a,b){
  let EPSILON = 0.001;
  return  ( ((a)-EPSILON)<(b) && ((a)+EPSILON)>(b) );
};

exports.FCompare = FCompare;
