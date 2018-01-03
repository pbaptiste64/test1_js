// What is the value of the variable result after the following code block?
// You must show your work and explain your thinking or else receive 0 points.

var f = function(){
  return 99;
}
var g = f;
// 1. g () = 99
var result = g();
// 2. result = 99
var g = function(){
  return 60;
}

// Answer:
// result = 99