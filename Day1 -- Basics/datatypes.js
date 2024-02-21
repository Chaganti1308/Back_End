// primitive datatypes

// 1. string

var first_name = "Neeha";

console.log(first_name);  //Neeha

// we can check the type of variable in 2 types
console.log(typeof first_name);  //string
console.log(typeof(first_name));  // string

//2. Number

var age = 25;
var weight = 75.5;

console.log(age);
console.log(weight);

console.log(typeof age); // number
console.log(typeof(weight)); //number

// 3. BIG INT

var big_number = 123456789n;
console.log(typeof big_number); // bigint

// 4. NaN

console.log(typeof NaN);  // number

// 5. Null

console.log(typeof null);

// 6. undefined

var first_name;
console.log(first_name); //undefined

// 7. Boolean

console.log(typeof true); //boolean

// 8. Symbol

var s1 = Symbol();
console.log(typeof s1);  //symbol