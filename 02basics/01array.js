// array
const arr = [0, 1, 2, 3, 4, 5]
const newArr = ["hello", "world"]
const someArr = new Array(1, 2, 3, 4)

// console.log(arr[1]);

// Array method

// arr.push(6)
// arr.pop()

// arr.unshift(10)
// arr.shift()

// console.log(arr.includes(0));
// console.log(arr.indexOf(5));

const d = arr.join()

// console.log(arr);
// console.log(typeof(d));

// Slice, splice- manuplates original array

console.log("A ", arr);

const myn = arr.slice(1, 3)

console.log(myn);
console.log("B ", arr);

const myn2 = arr.splice(1, 3)
console.log("C ", arr);

console.log(myn2);

