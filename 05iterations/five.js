const code = ["py", "java", "c++"]

code.forEach( function (item) {
    // console.log(item);
    
} )


code.forEach( (h) => {
    // console.log(h);
    
} )

function print(p) {
    console.log(p);
    
}

// code.forEach( print )

code.forEach( (item, index, array) => {
    // console.log(item, index, array);
    
} )

const mycode = [
    {
        lang: "js",
        langfil: "five.js",
    },
    {
        lang: "c++",
        langfil: "c++.cpp",
    },
    {
        lang: "py",
        langfil: "five.py",
    },
]

mycode.forEach( (i) => {
    console.log(i.langfil);
    
} )