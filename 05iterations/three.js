//  for of

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
    
}

const greet = "Hello World!"
for (const e of greet) {
    // console.log(e);
    
}

// Maps

const map = new Map()
map.set("h", "j")
map.set("ho", "j")
map.set("dl", "y2")

console.log(map);

for (const [k, value] of map) {
    // console.log(k, value);
    
}


const myObject = {
    k: "but",
    see: "let's see",
}

// for (const [et, l] of myObject) {
//     console.log(et, l);         not iretable
    
// }