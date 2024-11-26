//  for

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
    
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop ${j} and inner loop ${i}`);
        
    }
    
}

let myArray = [1, 2, 3, 4, 5, 6, 7]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//  break and continue

// for (let index = 0; index < 20; index++) {
//     if (index == 5) {
//         break
//     }
//     console.log(index);
    
    
// }
for (let index = 0; index < 20; index++) {
    if (index == 5) {
        continue
    }
    console.log(index);
    
    
}