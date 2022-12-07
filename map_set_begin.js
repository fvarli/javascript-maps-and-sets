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
console.log('------------------------------------------------------');

console.log('Delete the element associated with the key 3.');
console.log('Did my key-value pair successfully delete -3?', saturday.delete(3));
console.log('------------------------------------------------------');

console.log('Delete the element associated with the key 10.');
console.log('Did my key-value pair successfully delete -10?', saturday.delete(10));
console.log('------------------------------------------------------');

console.log('What is the first key in your saturday map object?');
const saturdayKeys = saturday.keys();
const firstKey = saturdayKeys.next().value;
console.log('The first key in our saturday map is', firstKey);
console.log('------------------------------------------------------');

console.log('What is the second value in your saturday map object?');
const saturdayValues = saturday.keys();
saturdayValues.next();
const secondValue = saturdayValues.next().value;
console.log('The second value in our saturday map is', secondValue);
console.log('------------------------------------------------------');


console.log('What is the third set of entries in your saturday Map object?');
const saturdayEntries = saturday.entries();
saturdayEntries.next();
const secondEntry = saturdayEntries.next().value;
console.log('What is our second entry in our map?', secondEntry);
console.log('------------------------------------------------------');

// Using the forEach method, if a key is equal to 12,
// Console log the value of the key.

saturday.forEach((value, key) => {
    if (key === 12) {
        console.log(`It's time for ${value}`);
    }
});
console.log('------------------------------------------------------');

console.log('Clear the entire saturday Map object');
saturday.clear();
console.log('Map Size?', saturday.size);
console.log('------------------------------------------------------');
