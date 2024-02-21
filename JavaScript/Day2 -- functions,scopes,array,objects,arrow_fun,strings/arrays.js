/**
 * array is ordered collection of data  and having different data types.
 * Arrays are mutable.
 */

/** 
// declaration -1
var arr = [1,2,3,4];
console.log(arr);
console.log(typeof arr);

// declaration -2 
var arr1 = Array("1","2","3","4");
console.log(arr1);
console.log(typeof arr1);

//declaration -3
// using new keyword
var arr2 = new Array('Rishi',5,240719);
console.log(arr2);
console.log(typeof arr2);

*/

// arr = [1,2,3,4,5,6,8,9,7,15,24,28,23,29];

// console.log(arr[2]);
// console.log(arr[10]);
// console.log(arr[15]);
// console.log(arr[-5]);

// arr[0] = 200;
// console.log(arr);

arr = [5,9,7,8,3,4,2,1];

console.log(arr);

// push() - push the elements in the last
arr.push(10);
console.log(arr);

arr.push(12,13,15);
console.log(arr);

// unshift() -- add elements in the first
arr.unshift("Hello");
console.log(arr);

arr.unshift("javascript","world");
console.log(arr);


// pop() - to remove the elements from the last
arr.pop();
console.log(arr);

// shift() - remove the elements from start

arr.shift();
console.log(arr);

// concat() - add two arrays

a1 = [1,2,3];
a2 = ["1","2","3"];

a = a1.concat(a2);
console.log(a);

// length() - to know the size of the array
console.log(a.length);

char_arr = ["N","e","e","h","a"," ","C","h","a","g","a","n","t","i"];
console.log(char_arr.join());  // N,e,e,h,a, ,C,h,a,g,a,n,t,i
console.log(char_arr.join("")); //Neeha Chaganti
console.log(char_arr.join("$")); //N$e$e$h$a$ $C$h$a$g$a$n$t$i

//toString()

console.log(char_arr.toString());
console.log(typeof char_arr.toString());

/** 
 * slice() -- returns the sub array
 * does not change the existing array
*/

let nums = [1,2,3,4,5,6,7,8,9];

console.log(nums.slice(2,6));
console.log(nums.slice(5));
console.log(nums.slice(-5,-2));

/** 
 * splice() -- changes effects on the existing array
*/

let numbers = [1,2,3,4,5,6];

let removed = numbers.splice(2,2,"a","b","c","d");
console.log(removed); // removed elements from the array
console.log(numbers); // extracted array


/**
 * reverse() - reverse array
 */

let array_num = [1,2,3,4,5,6]

console.log(array_num.reverse());

// indexOf()
console.log(array_num.indexOf(6));
console.log(array_num.indexOf(7)); // if element not found returns -1.

//sort() - sorting  of an array

let arra1 = [5,9,2,6,4,3];
console.log(arra1.sort());