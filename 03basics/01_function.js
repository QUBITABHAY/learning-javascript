function firstFunction(){
    console.log("ok done!");
    
}
// firstFunction()

// function addNum(num1, num2){
//     console.log(num1 + num2);
    
// }

function addNum(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
    
}

const result = addNum(3, 4)

// console.log("Answer:", result);

function loginUserMessage(username){
    if(!undefined){                        //  username === undefined  can be written as !undefined
        // console.log("please enter user name");
        
    }
    return `${username} Just Looged In`
}

const message = loginUserMessage()
// console.log(message);

function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(500, 100, 200,300));

const user = {
    username: "Abhay",
    price: 199
}

function handleObject(anyobject){
    console.log(`Usermane is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Michel",
    price: 200
})