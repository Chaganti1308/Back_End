const f1promise = new Promise((resolve,reject)=> { 

    setTimeout(() => {
        
        // Math.random() will generate numbers in between  0 to 1
        if(Math.random() > 0.5 ){
            resolve("Friend_1 : Hey.. I am ready for the trip")
        }else{
            reject("Friend_1 : Sry..I am not coming")
        }
    },3000)
})


const f2promise = new Promise((resolve,reject)=> { 
    setTimeout(() => {
        
        // Math.random() will generate numbers in between  0 to 1
        if(Math.random() > 0.5 ){
            resolve("Friend_2 : Hey.. I am ready for the trip")
        }else{
            reject("Friend_2 : Sry..I have some other work")
        }
    },2000)
})
const f3promise = new Promise((resolve,reject)=> {
    setTimeout(() => {
        
        // Math.random() will generate numbers in between  0 to 1
        if(Math.random() > 0.5 ){
            resolve("Friend_3 : Hey.. I am ready for the trip")
        }else{
            reject("Friend_3 : Sry..I am going out")
        }
    },3000)
})

Promise.all([f1promise,f2promise,f3promise]).then((msg) =>{
    console.log(msg);
    console.log("Yeyy... We are going to trip");
}).catch((msg)=> {
    console.log(msg);
    console.log("Will plan some another time");
})