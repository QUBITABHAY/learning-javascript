const any = "isdo.ai"

if (any) {
    // console.log("got it");
} else{
    // console.log("error");
    
}


//  Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy value

// "0",  "false", " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

// console.log(val1);

// Terniary Oerator

// condition ? true : false

const ice = 100
ice <= 80 ? console.log("less than 80") : console.log("more than 80")
