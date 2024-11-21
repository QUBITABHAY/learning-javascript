const l = ["ok", "bye", "but", "what"]
const m = ["java", "python", "hue", "dhi"]

// l.push(m)
// const d = l.concat(m)
// console.log(d);

const allNew = [...l, ...m]
// console.log(allNew);

const arr = [1, 2, 3, 4, [5, 6, 7], 9, [8, 4, [5, 3, [8]]]]

const newArr = arr.flat(2)
console.log(newArr);


console.log(Array.from("Abhay"));
console.log(Array.from({name: "Abhay"}));  // intersting case give an extra empty list 


let score1 = 300
let score2 = 200
let score3 = 100

console.log(Array.of(score1, score2, score3));
