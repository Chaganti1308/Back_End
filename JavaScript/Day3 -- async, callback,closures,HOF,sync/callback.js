// callback

function greet(name,callback){
    const greeting =  "Hello.." + name;
    callback(greeting);
}

function dispalyGreeting(message){
    console.log(message);
}

greet("Neeharika", dispalyGreeting)