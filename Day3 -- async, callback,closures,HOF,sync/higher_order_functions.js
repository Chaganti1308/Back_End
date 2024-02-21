/**
 * 
 * HOF -- Higher Order Function
 * A function which takes another function as an argument called HOF.
 */

function operation(operatorFun,a,b){
    return operatorFun(a,b)
}

function add(a,b){
    return a+b;
}

const res = operation(add,5,10);
console.log(res);


/**
 * we an write a function inside a function.
 * a function with out name known as anonymous function.
 */

function getGreet(){
    return function(){
        console.log("Hello World..!");
    }
}

// here greet is treated as function.
//function is assigned to greet.
const greet = getGreet();

greet();