// loops
// when you want to do a repetitive task , we use loops


// for loop
// when  you know the no of iterations

for(let i = 1; i <= 10; i++){
    console.log("i value is ", i);
}



// while loop
// upto the condition satisfies


var i = 1;

while(i <= 10 ){
    console.log("i value is ", i);
    i = i + 1;
}




// do..while


var i = 1;
do{
    console.log("i value is ", i);
    i = i + 1;
}while(i < 10)




// for .. in 


var a = [1,2,3,45,6]

for( i in a ) {
    // console.log(i); // prints index number
    console.log(a[i]); 
}



// break and continue

// if condition meets true, if there is continue, skip the current iteration and continue.
// if condition meets false , if there is break , comes out of the loop.


for(var i = 1; i <= 50; i++){
    if(i%2 != 0){
        continue;
    }
    console.log("prints even numbers");
    console.log(i);
}




for(var i = 1; i <= 50; i++){
    if(i%2 != 0){
        break;
    }
    console.log(i);
}