const ok = function(){
    console.log("ok");
}

const changeText = function () {
    document.querySelector("h1").innerHTML = "Most Awaited"
}

const change = setTimeout(changeText, 2000)

document.querySelector("#stop").addEventListener("click", function(){
    clearTimeout(changeText)
    console.log("Stopeed")
})