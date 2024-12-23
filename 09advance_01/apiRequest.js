document.addEventListener("DOMContentLoaded", function() {
    const url = "https://api.github.com/users/QUBITABHAY"
    const hxr = new XMLHttpRequest();
    hxr.open("GET", url)
    hxr.onreadystatechange = function () {
        console.log(hxr.readyState);
        if (hxr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(data.followers);
            window.githubData = data;
        }
    }


    const main = document.querySelectorAll("body")
    const insert = document.getElementById("insert");

    main.forEach(function (cards) {
        cards.addEventListener("click", function (e) {
            console.log(e);
            console.log(e.target);
            if (hxr.readyState === 4 && e.target.id === "card") {
                insert.innerHTML = `
                    <div>
                        <img src="${window.githubData.avatar_url}" alt="problem in fetching data">
                        <h1>This is the profile pic of Github profile</h1>
                    </div>
                `
            }
        })
    })

    hxr.send()
});