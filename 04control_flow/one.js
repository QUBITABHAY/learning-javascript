//  if

// if (condition) {

// } else{
// }

const score = 10

// if (score > 100) {
//     const  pwoer = "fly"
//     console.log(`User power ${pwoer}`);
// }

// if (score > 100) console.log(`test`);

// if (score < 100) {
//     console.log("Less than 100");
    
// } else if (score == 100) {
//     console.log("Score is equal");
    
// } else {
//     console.log("Score is greater than 100");
    
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}