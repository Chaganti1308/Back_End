// var -- used too define variable
// var is function scope no block scope
// it is hoisted

// function f1(){
//     var i =5;
//     console.log(i);
// }

// f1();
// // console.log(i);

// {
//     var j = 10;  // here j has no block scope
// }

// console.log(j);

// console.log(k);  // here hoisting is happened

// var k = 20;

/**
 * Let
 * 
 * Let doesn't support hoisting
 * it has block scope
 */

// hoisting
/** 
 * 
console.log(a);  // error like --  a is not defined

let a = 10;  

*/
// after initialization getting error like 
// ReferenceError: Cannot access 'a' before initialization


// block scope
/** 
{
    let b = 20;
}

console.log(b);
*/
// error ---  ReferenceError: b is not defined

/**
 * Const
 * Scope is  exactly same as let
 * reassignment is not possible
 */

const country = "India";

country = "America";

// error -- TypeError: Assignment to constant variable.
