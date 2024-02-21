/**
 * Global scope  -- Any where in the script you can declare and access it.
 */

var first_name = "Chaganti";

console.log(first_name);

function fun_name(){
    console.log(first_name);
}

fun_name();

/**
 * function scope -- variable scope is available to that function only 
 * 
 */

/**
 * firstName is accessing outside of the function.. 
 * We will get error as Reference Error
 */

function f_name(){
    var firstName = "Neeha";
    console.log(firstName);
}

f_name();

console.log(firstName);

/**
 * Block Scope
 */


/**
 * incase of variable declaration with "var"
 * we can access it outside of block also
 */


{
    var x = 20
    console.log(x);
}

console.log(x);  



/**
 * incase of variable declaration with "let"
 * we can't access it outside of block 
 * will get reference error
 */
{
    let x = 20
    console.log(x);
}

console.log(x);  