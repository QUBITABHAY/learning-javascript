const sayDate = function (str) {
    console.log(str, Date.now());
    
}

const interval = setInterval(sayDate, 1000, "hi")

clearInterval(interval)