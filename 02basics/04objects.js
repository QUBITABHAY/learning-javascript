// const auser = new Object()      this is sngleton object
const auser = {}    //this is not a sigleton object 

auser.id = "123abc"
auser.name = "Michel"
auser.isLoogedIn = false

// console.log(auser);

const reguser = {
    email: "abahy@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Abhay",
            lastName: "Pratap"
        }
    }
}

// console.log(reguser.fullname.userfullname);

const some = {1: "a", 2: "b", 3: "c"}
const some1 = {4: "a", 5: "b", 6: "c"}

// const some3 = {some, some1}

// const some3 = Object.assign({}, some, some1)
const some3 = {...some, ...some1}

// console.log(some3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(auser);

// console.log(Object.keys(auser));
// console.log(Object.values(auser));
// console.log(Object.entries(auser));

// console.log(auser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "patanahi",
    price: "999",
    courseInstructor: "Abhay" 
}

const {courseInstructor} = course
console.log(courseInstructor);


// JSON syntax

// {
//     "coursename": "patanahi",
//     "price": "999",
//     "courseInstructor": "Abhay"
// }
