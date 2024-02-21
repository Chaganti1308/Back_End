/**
 * destructuring arrays
 */
/**
const num = [1,2,3];

// const [a,b,c] = [1,2,3];
const [a,b,c,d] = [1,2,3];

console.log(a);
console.log(b);
console.log(c);
console.log(d); // returns undefined

const [p,q,r] = [1,2,[3,4,5]];

console.log(p);
console.log(q);
console.log(r);

*/


/**
 * destructuring an object
 */

const user = {
    user_name : "Neeharika",
    age : 25,
    address : {
        city : "Hyd",
        state : "Telangana",
        country : "India"
    }
}

const { user_name , age,address : { city, state, country } } = user

console.log(user_name);
console.log(age);
console.log(state);