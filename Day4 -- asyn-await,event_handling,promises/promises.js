/**
 * promises
 * 
 * Raj promises to Rani
 */

const girlPromise = new Promise((resolve,reject ) => {
    let parentDecision = false;

    if(parentDecision){
        resolve("Get Ready fot the Wedding")
    }
    else{
        reject("Dad looked an IAS profile")
    }
});

girlPromise.then((msg) => {
    console.log("Girl message : ", msg);
    console.log("Yeyyy...Will book a wedding venue..")

}).catch((msg) => {
    console.log("Girl message : ", msg);
    console.log("You can find someone")
})