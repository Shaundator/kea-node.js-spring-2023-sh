// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const exercise3 = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(exercise3)
// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const another1 = parseFloat(numberOne);
const another2 = parseFloat(numberTwo);
const exercise4 = another1 + another2;

console.log(exercise4.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const exercise5 = (one + two + three) / 3

console.log(parseFloat(exercise5).toFixed(5))



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const exercise6 = letters.charAt(2)
//letters[2] also works

console.log(exercise6)




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const location = fact.indexOf("javascript")
const temporaryExercise7 = fact.split("")
temp[location] = "J"
const exercise7 = temp.join("")

const factCapitalizedJ = fact.replace("javascript", "Javascript")

console.log(exercise7)


// --------------------------------------


