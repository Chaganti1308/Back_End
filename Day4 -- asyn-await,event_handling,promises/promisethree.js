const gf1promise = new Promise((resolve,reject)=> { 

    setTimeout(() => {
        
        // Math.random() will generate numbers in between  0 to 1
        if(Math.random() > 0.5 ){
            resolve("Girl_Friend_1 : Hey.. I will come for dinner")
        }else{
            reject("Girl_Friend_1 : Phone is unreachable")
        }
    },3000)
})


const gf2promise = new Promise((resolve,reject)=> { 
    setTimeout(() => {
        
        // Math.random() will generate numbers in between  0 to 1
        if(Math.random() > 0.5 ){
            resolve("Girl_Friend_2 : Hey.. I will come for dinner")
        }else{
            reject("Girl_Friend_2 : Sry..I am on diet")
        }
    },2000)
})
const gf3promise = new Promise((resolve,reject)=> {
    setTimeout(() => {
        
        // Math.random() will generate numbers in between  0 to 1
        if(Math.random() > 0.5 ){
            resolve("Girl_Friend_3 : Hey.. I will come for dinner")
        }else{
            reject("Girl_Friend_3 : My friends are coming")
        }
    },3000)
})

Promise.any([gf1promise,gf2promise,gf3promise]).then((result) =>{
    console.log(result);
    console.log("My valentine is sorted");
}).catch((msg)=> {
    console.log(result);
    console.log("Plan is not worked out...!");
})