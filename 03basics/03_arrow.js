const user = {
    username: "abhay",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "michel"
// user.welcomeMessage()

// function one() {
//     console.log(this);
    
// }

const one = () => {
    console.log(this)
}
one()

// const add = (n1, n2) => {
//     return n1 + n2
// }

// const add = (n1, n2) => n1 + n2
const add = (n1, n2) => (n1 + n2)



