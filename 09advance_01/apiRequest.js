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

const card = document.getElementById("card")
const main = document.querySelector("body")

main.forEach(function (cards) {
    cards.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        if (hxr.readyState === 4 && e.target.id === "card") {
            const data = JSON.parse(this.responseText)
                insert.innerHTML = `
                    <div>
                        <img src="${data.avatar_url}" alt = "problem in fetching data">
                        <h1>This is the profile pic of Github profile</h1>
                    </div>
                `
        }
    })
})

hxr.send()