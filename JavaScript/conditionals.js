// if .. 


var num = 21;

if(num % 2  == 0){
    console.log("Number is even");
}


console.log("After If");


// if..else

var num = 21;

if(num % 2  == 0){
    console.log("Number is even");
}else{
    console.log("Number is odd");
}


console.log("After If");


// ternary operator


var num = 20;
var res = (num % 2 == 0)?"Number is even":"number is odd";

console.log(res);



// nested conditionals

var a = 10 ;


if(a>=0){
    if(a>5){
        console.log('a is greater than 0 and 5');
    }else{
        console.log('a is greater than 0 and less than 5');
    }
}else{
    console.log('a is less than 0');
}


// for ternary

var result = (a >= 0)? (a>5?"a is greater than 0 and 5":"a is greater than 0 and less than 5"):"a is less than 0";
console.log(result);


// Switch
// if the expression is matches with the case value, returns that case statement

var fruit = "apple";

switch(fruit){
    case "banana":
        console.log("Fruit is banana");
        break;
    case "apple":
        console.log("Fruit is apple");
        break;
    default:
        console.log("fruit is not matched")
}