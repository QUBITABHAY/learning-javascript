// document.getElementById("owl").onclick = function() {
//    alert("owl")
// }

// attachEvent()
// jQuery

// type, timestamp, defaultPrevented 
// target, toElement, srcElement,  currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode 


// document.getElementById("images").addEventListener("click", function(e) {
//     console.log("ul");
    
// }, false)

// document.getElementById("owl").addEventListener("click", function(e) {
//     console.log("owl");
//     e.stopPropagation()
// }, false)

// document.getElementById("google").addEventListener("click", function (e) {
//     console.log("g click");
//     e.preventDefault()
// })

document.querySelector("#images").addEventListener("click", function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
    

})


