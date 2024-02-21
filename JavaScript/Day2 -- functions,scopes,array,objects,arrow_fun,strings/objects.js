const user = {
    user_name : "Neeharika",
    age : 25,
    city : 'Hyderabad'
}

console.log(user);

// Accessing elements
console.log(user.user_name);
console.log(user['city']);
// console.log(user.keys);

/**
 * adding data to object
 */

user.country = "India";
user['continent'] = "Asia";
console.log(user);

/**
 * deleting object keys 
 */
delete user.country
console.log(user);

delete user['continent']
console.log(user);

let person = {
    p_name : "chaganti",
    age : 25,
    address : {
        city : "Hyd",
        state : "Telangana",
        country : "India"
    }
}

console.log(person);

for (let key in person){
    console.log(key);
}

for (let key in person){
    console.log(key ,"=>" ,person[key])
}

console.log(Object.keys(person)) ;

console.log(Object.values(person));

//Get both keys and values

console.log(Object.entries(person));

/**
 * cloning an object using assign
 */

const new_person = Object.assign({},person);
console.log(new_person);

const new_person_1 = Object.assign({},person,{role:"Developer"})
console.log(new_person_1);
