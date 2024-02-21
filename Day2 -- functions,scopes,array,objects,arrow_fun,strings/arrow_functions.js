/**
 * function  with no args and no returns
 */

// normal function

function greeting(){
    console.log("Hello World..!");
}

greeting();

// arrow function

var hello = () => console.log("Hello.. Have a nice Day..!");

hello();

/**
 * function with parameters and return
 */

var sumOfNumbers = (a,b)  => a+b ;

console.log(sumOfNumbers(21,14));

/**
 * arrow function with multiple lines
 */

var operation = (a,b) => {
    console.log("Operation to be performed");
    return a*b
}

console.log(operation(10,6));

/** 
 * IIFE - Immediately Invoked Function Expression
 * 
 * After defining the function , immediately calling the function
 * 
 */


(function (){
    console.log("Hello from JAvaScript .. !");
})();
