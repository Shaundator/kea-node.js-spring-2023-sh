// Rule 1: Have to declare to assign a value when declaring.

const me = {};
/* key: value
=== key-value pairs
*/
// me = {};

// Rule 2: Cannot reassignt to constant
me.name = "Shaun";
me.age = 23;

console.log(me)


const hobbyOne = "Football";
const hobbyTwo = 'Swimming';
const hobbyThree = `Cooking`;

console.log('hobby one: ' + hobbyOne)
console.log('hobby two: ' + hobbyTwo)
console.log('hobby three: ' + hobbyThree)