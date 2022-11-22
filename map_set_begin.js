// Saturday To Do List
// 8am: Walk the dogs
// 12pm: Lunch
// 3pm: Watch a movie

// Create a new Map() and add each to-do as a key-value pair.

const saturday = new Map();

saturday.set(8, 'walk the dogs');
saturday.set(12, 'lunch');
saturday.set(3, 'watch a movie');
console.log('------------------------------------------------------');
console.log('How do we get the value associated with the 12 key?');
const noon = saturday.get(12);
console.log('What am I doing at 12pm on Saturday?', noon);
console.log('------------------------------------------------------');

console.log('How do we get the value associated with the 9 key?');
const nine = saturday.get(9);
console.log('What am I doing at 8am on Saturday?', nine);
console.log('------------------------------------------------------');

console.log('Does our Map have a value associated with the 4 key?');
const hasFour = saturday.has(4);
console.log('Does our Map have a value associated with 4?', hasFour);
console.log('------------------------------------------------------');

console.log('Does our Map have a value associated with the 8 key?');
const hasEight = saturday.has(8);
console.log('Does our Map have a value associated with 8?', hasEight);
console.log('------------------------------------------------------');

console.log('What is the size of our Saturday Map?');
const saturdaySize = saturday.size;
console.log(`My map contains ${saturdaySize} elements.`);