// What is the value of the result variable in the following code? You must show
// your work and explain your thinking or else receive 0 points.

var result = mystery("cow");
// first, "cow" is passed as the argument in the mystery function
function mystery(animal){ 
  var callCount = 0;
// second, animal does not equal "chicken" so it skips this if statement
// fifth, The mystery function gets called with "chicken" passed as an argument and now calls cluck function
  if (animal == "chicken"){
    return cluck();
  }
// third, At this point animal does == "cow" so the function returns the moo() function
  else if (animal == "cow"){
    return moo();
  }
  else return callCount;
// sixth, var callCount is now = 1 and the function returns "cluck"
  function cluck(){
    callCount++;
    return "cluck";
  }
//  fourth, Moo function gets called and animal is now "chicken" and returns "moo" + mystery("chicken")
  function moo(){
    animal = "chicken";
    return "moo" + mystery(animal);
// seventh, return "moo" + "cluck" 
  }
}


// Answer:
console.log(result)
// result = moocluck