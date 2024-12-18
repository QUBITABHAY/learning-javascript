// ES6

class User{
    constructor (username, email, password) {
        this.username = username
        this.email = email
        this.password = password 
    }

    encryptPassword () {
        return `${this.password}abc`
    }

    changeUsername () {
        return `${this.username.toUpperCase()}`
    }
}

const test = new User("test", "test@test.com", "passTest")

console.log(test.encryptPassword());
console.log(test.changeUsername());

// behind scene

function user (username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

user.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const test01 = new User("test01", "test01@test.com", "pass01Test")

console.log(test01.encryptPassword());
console.log(test01.changeUsername());