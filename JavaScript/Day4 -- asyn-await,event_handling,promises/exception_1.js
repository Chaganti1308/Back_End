// let obj = undefined

// console.log(obj.name); //TypeError: Cannot read properties of undefined (reading 'name')


try{
    let obj = undefined
    console.log(obj.name); 
}catch(err){
    console.log("Exception Happened");
}finally{
    console.log("i'll execute always");
}