const url = "https://api.github.com/users/QUBITABHAY"
const hxr = new XMLHttpRequest();
hxr.open("GET", url)
hxr.onreadystatechange = function (k) {
    console.log(hxr.readyState);
    if (hxr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        console.log(data.followers);
    }
}
hxr.send()


const card = document.getElementById("card")

window.addEventListener("click", function (e) {
    console.log(e)
    console.log(e.target)
    if (e.target.id === "card") {
        insert.innerHTML = `
            <div>
                <img src="${k.data.avatar_url}" alt="not avilable">
            </div>
        `
        }
    })