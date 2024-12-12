const url = "https://api.github.com/users/QUBITABHAY"
const hxr = new XMLHttpRequest();
hxr.open("GET", url)
hxr.onreadystatechange = function () {
    console.log(hxr.readyState);
    if (hxr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(data.followers);
    }
}
hxr.send()


const card = document.getElementById("card")