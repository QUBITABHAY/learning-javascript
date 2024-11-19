// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// let createdDate = new Date(2024, 10 , 19)
// let createdDate = new Date("2024-11-19")
// let createdDate = new Date(2024, 10 , 19 , 3 , 9)
let createdDate = new Date("1-2-3948")
// console.log(createdDate.toLocaleString());

let nowTime = Date.now()
// console.log(nowTime);

// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/100));

let newDate = new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


newDate.toLocaleString("default" , {
    weekday: "long",
})