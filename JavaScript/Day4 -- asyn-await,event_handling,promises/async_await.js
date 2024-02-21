/**

function getMessage(){
    return "Hello Gentlemen..!"
}

console.log(getMessage());

async function getMsg(){
    return "Hello Gentle women..!"
}

getMsg().then((result) => console.log(result));

*/

/**
 * Print Hello after a wait
 */

// function printHelloAfterWait(){
//     console.log("First Line");
//     setTimeout(()=> {
//         console.log("Hello Students");
//     },3000)
//     console.log("Last line");
// }

// printHelloAfterWait()


console.log("Hello from Beginning....");
async function printHelloAfterWait(){
    console.log("First Line");

    let data = new Promise((resolve,reject) =>{
        setTimeout(()=> {
            resolve("Hello Students");
        },3000)
    })
    let result = await data; // start waiting for the data promise to be completed
    console.log(result);
    console.log("Last line")
}

printHelloAfterWait()

console.log("Hello from Ending....");
