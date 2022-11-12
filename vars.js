console.log('Started: vars.js');

// exports.x =0
// exports.y =0


let x= 12
let y= 90

function printX(){
  console.log("vars x: ",x);
}

function changeX(v){
  x = v
}


module.exports = {
  x,
  y,
  printX,
  changeX
}