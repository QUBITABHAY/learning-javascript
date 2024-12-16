function multiplyNumBy5(num){
    return num*5
}
multiplyNumBy5.power = 2
console.log(multiplyNumBy5(5));
console.log(multiplyNumBy5.power);
console.log(multiplyNumBy5.prototype);


function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++ 
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("chai", 5)
const tea = createUser("tea", 25)

chai.printMe()