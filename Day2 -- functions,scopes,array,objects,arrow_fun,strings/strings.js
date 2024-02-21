/**
 * string : string is a sequence of characters
 * define with " " or ' ';
 * strings are immutable
 * 
 */

var f_name = 'Neeharika';
var city = 'Hyderabad';

console.log(f_name,city);
console.log(typeof city);


// length of string
console.log(city.length);

/**
 * Accessing elements based on index
 */

console.log(city[0]); // H
console.log(city[4]); // r

console.log(city[12]); 
// returns undefined -- because index is not present

city[0] = 'h'; //   -- it is not updated to string
console.log(city);


// concat -- join two strings
// + -- also for concat two strings

 
let first_name = "Neeharika ";
let last_name = "Chaganti ";

let full_name = first_name.concat(last_name);

console.log(full_name);
console.log(last_name + first_name);



// toUpperCase() -- changing the string to uppercase

console.log(first_name.toUpperCase());

// toLowerCase() -- changing the string to lowercase

console.log(first_name.toLowerCase());

// to know character at index i

console.log(first_name.charAt(4));

/**
 * slicing
 */

console.log(full_name);

console.log(full_name.slice(3,10));
console.log(full_name.slice(-9));
console.log(full_name.slice(-9,-2));


/**
 * indexOf() -- returns the character index position
 * if character is not found, returns -1.
 */

console.log(f_name);
console.log(f_name.indexOf("h"));
console.log(f_name.indexOf('x'));


/**
 * trim -- trimming the space around the string
 */

let word = "  Hello..!  ";
console.log(word);
console.log(word.trim());


/**
 * split() -- splitting the string using  separator and will be returned in the form as array.
 */
let fullName = "Neeha-Chowdary-Chaganti";
console.log(fullName.split("-"));
console.log(fullName.split(""));