// a cosnt is immutable, it's value cannot be replaced
const person = {
  name: 'Attila',
  age: 28
};

// it means that it can't be reassigned, but that doesn't mean, that an object property can't be changed. It ca be.
person = 'asd'; // error

person.age = 29; // ok

// this creates a "frozen" version of the object, no proprty can be modified onwards.
const attile = Object.freeze(person);
