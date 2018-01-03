// IMPORTANT: Make sure you test every answer in the console to make sure it
// prints what you want it to.

// Question 10
// Create a new type of Object called *Athlete* with the following properties:
//
// 1. name
// 2. age
// 3. sex
// 4. height
// 5. weight
// 6. the last five marks reached in competitions (as an array named marks).
//
// IMPORTANT: you must use pseudoclassical notation

var Athlete = {
    name: "Phil Baptiste",
    age: 24,
    sex: "M",
    height: "5'9",
    weight: 170, //I got fat 
    marks: [2, 2, 3, 4, 5]
}
console.log(Athlete["name"])
console.log(Athlete["age"])
console.log(Athlete["sex"])
console.log(Athlete["height"])
console.log(Athlete["weight"])
console.log(Athlete["marks"])

// Question 11
// Create a prototypal function on the Athlete prototype named getMarksAverage
// which computes the average of the marks of the athlete.
function getMarksAverage(Athlete){
    let total = 0
    for(let i = 0; i < this.marks.length; i++){
        total += this.marks[i]
    }
    this.average = total / this.marks.length
    
}
console.log(getMarksAverage(Athlete))








// Question 12
// Create a prototypal function on the Athlete prototype called getRoundedMarks
// which uses the Array.map function and Math.round in order to round the marks
// of the athlete to the nearest integer. Your function should return an array
// with the rounded marks.

//*idk*******************************
