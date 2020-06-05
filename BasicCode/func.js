myFunc();

let expression  =  (a,b=99)=>{
  console.log('expression',a,b)
}
function myFunc(){
  console.log('my function');
}

expression(10,"hello");
