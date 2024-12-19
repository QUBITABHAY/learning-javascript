class User {
    constructor(username) {
        this.username = username
    }

    logMe () {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const test = new Teacher("test", "test@test.com", "testpass")

test.addCourse()

const test01 = new User("test01")

test01.logMe()

console.log(test instanceof User)