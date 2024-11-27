const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const total = num.reduce(function (acc, curr) {
//     // console.log(acc, curr);
    
//     return acc + curr
// }, 0)

const total = num.reduce( (a, c) => a + c, 0)


// console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);