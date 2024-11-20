// singleton

// object literals

const ms = Symbol("k1")

const jsuser = {
    name: "Abhay",
    "full name": "Abhay Pratap Yadav",
    [ms]: "k11", // to link symbol in object
    age: 19,
    location: "Jaunpur",
    email: "abhay@xyz.com",
}


// console.log(jsuser.name);
// console.log(jsuser[ms]);

jsuser.age = 20
// Object.freeze(jsuser) // to freeze the changes
jsuser.age = 18
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("OK GOT IT");
    
}

jsuser.greeting2 = function(){
    console.log(`OK GOT IT, ${this["full name"]}`);
    
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());

