// possible because of hoisting
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) - min)
}


// Anonymous function
const randomAnonymousFunction = function random(min, max) {
    return Math.floor(Math.random() * (max - min +1) - min)
};

// Anonymous function
const randomAnonymousFunction2 = function (min, max) {
    return Math.floor(Math.random() * (max - min +1) - min)
}

const randomArrowFunction = () => {
    return Math.floor(Math.random() * (max - min + 1) - min)
}

const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

// Read up on this
function genericActionPerformer(genericAction, genericName) {
    // do stuff
    return genericAction(genericName)
}

const subtract = (name) => `${name} is substracting.`
const walk = (name) => `${name} is walking`


// task without touching the two functions above but still using them below
// tast make it console.log Tobias is substracting.
// task you must use both functions

console.log(genericActionPerformer(subtract, "Andrea") + " & " + genericActionPerformer(walk, "Andrea"))




