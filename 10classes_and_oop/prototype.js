let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function () {
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.abhay = function () {
    console.log(`abhay is present in all object`);
}

Array.prototype.heyabhay = function () {
    console.log(`abhay is in array mode`);
    
}

// heroPower.abhay()
// myHeros.abhay()
// myHeros.heyabhay()
// heroPower.heyabhay()
// inheritance

const user = {
    username: "hello",
    email: "hello@google.com"
}

const test = {
    makePaper: true,
}

const testAssistant = {
    isAvailable: false,
}

const testSupport = {
    makeBackup: "Backup Paper",
    fulltime: true,
    __proto__: testAssistant,
}

test.__proto__ = user

// morden syntax
Object.setPrototypeOf(testSupport, test)

let anotherUserName = "HelloSeeU        "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`This is true length ${this.trim().length}`)
}

anotherUserName.trueLength()

"kdbjn".trueLength()
"ifvbenl".trueLength()