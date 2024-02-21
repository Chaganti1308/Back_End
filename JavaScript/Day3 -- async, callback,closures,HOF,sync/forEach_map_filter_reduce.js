/**
 * forEach() -- 
 */

var players = ["Sachin","Virat","Rohit","dhoni"];

console.log(players);

// here for each is HOF.
players.forEach((player) => console.log(player));



/**
 * map -- creates new transformed array i.e it returns new array
 * No changes happened in the original array
 */

var arr1 = [1,2,3,4,5,6];

var cube_array = arr1.map((num) => num**3);

console.log(arr1);
console.log(cube_array);


/**
 * filter -- filtering the data from array base  on condition
 * it's also return new array
 */

var num_arr = [1,2,3,4,5,6,7,8,9,10];

var even_arr = num_arr.filter((item) => (item % 2) == 0)

console.log(even_arr);

/**
 * reduce() -- returns the value
 */

var array1 = [1,3,5,7,9];

var add = array1.reduce((a,b) => (a+b))
// array1.reduce((current,next) => (current+next))
console.log(add);


