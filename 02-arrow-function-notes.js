// example
const names = ['wes', 'kait', 'lux'];

const fullNames = names.map(function(name) {
    return `${name} bos`; // template string
});

console.log(fullNames);

// arrow function instead
const fullNames2 = names.map((name) => {
    return `${name} bos`; // template string
});

// with only 1 param, no parenthesis is needed (style only)
const fullNames3 = names.map(name => {
    return `${name} bos`; // template string
});

// random tip: console.table(object)
// renders a cool table view

// arguments is a keyword, that gets all of a functions arguments in an array
// it does not work with arrow functions

const orderStuff = () => {
    const stuff = Array.from(arguments); // ReferenceError
};

const orderStuff2 = function () {
    const stuff = Array.from(arguments); // Array
    console.log(stuff);
};

