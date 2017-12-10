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