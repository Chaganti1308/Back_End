// Assignment

var first_name = "Neeharika";

// Arithmetic
// +,-,*,/,%,**,++,__
console.log(4+5);

var a = 20;
var b = 9;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(4**3);



// post increment

var i = 1;
console.log(i++);
console.log(i);

// pre increment

var i = 12;
console.log(++i);
console.log(i);


//Relational 

// equality check
console.log(1==2); // false
console.log(1==1); // false

// strict equality 

console.log(1==='1');  // false
console.log(1===1); // true

/** 
 * in equality check
 */

console.log(1 !='1');  // false
console.log(1 !== "1"); // true


/** 
 * Comparative
 */

console.log(3>4);
console.log(3<4);
console.log(3<=4);
console.log(3>=4);
console.log(3==3);
console.log(3!=3);

/**
 * Logical
 */

// && -- and, if both conditions are true, result will be true
// || -- or, if any of the condition is true , result will be true
// ^ -- NOT

console.log(3<4 && 4<5);
console.log(3>4 && 4<5);

console.log(3<4 || 4<5);
console.log(3>4 || 4<5);
console.log(3>4 || 4>5);


// bitwise operators
// 0 is false
// 1 is true

// 10 - 1010
// 06 - 0110

// & bitwise and
// | bitwise or

console.log(10 & 6);
console.log(10 | 6);