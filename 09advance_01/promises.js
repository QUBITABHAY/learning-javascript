const promiseOne = new Promise(function(resolve, reject) {
    // Do async task
    // DB call, crytpography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise Consumed");
    
})

new Promise(function(resolve, reject) {
    setTimeout(function () {
        console.log("Async task is 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("This is completed");
    
})

const promiseThird = new Promise(function(resolve, reject) {
    setTimeout(function () {
        resolve({username: "Abhay", email: "abhay@google.com"})
    }, 1000)
})

promiseThird.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Akash", password: "1234"})
        } else {
            reject("ERROR: Something Went Wrong")
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(error) {
    console.log("error");
    
}).finally(() => console.log("The promise task is done"))


const PromiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "JS", password: "123456"})
        } else {
            reject("ERROR: JS Went Wrong")
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive
        console.log(response);
    } catch (error) {
        console.log("error done")
    }
}

consumePromiseFive()


// async function getAlluser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error")
//     }
    
// }
// getAlluser()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error) => console.log(error))