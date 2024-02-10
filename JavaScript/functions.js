/**
 * Defining a function
 */

function helloStudents(){
    console.log("Hello Students..!");
}

helloStudents();


/**
 * Sum of two numbers
 */

function sumOfTwoNumbers(a,b){
    return a+b;
}

sumOfTwoNumbers(10,20);

console.log(sumOfTwoNumbers(10,20));


/**
 * Sum of two numbers with passing of single parameter
 */

function sum1(a,b){
    return a+b;
}

console.log(sum1(10));  // returns error

/**
 * sum of two numbers with default value at function level
 */

function sumNumbers(a,b = 20){
    return a+b;
}

console.log(sumNumbers(25));

/**
 * arguments -- args is a special type of object
 * passing the arguments with out defining at function level
 * prints in the form of object
 * [Arguments] {'0': 1,'1': 2,'2': 3,'3': 4,'4': 5,'5': 6,'6': 7,'7': 8,'8': 9}
 */

function argsObject(){
    console.log(arguments);
}

argsObject(1,2,3,4,5,6,7,8,9)