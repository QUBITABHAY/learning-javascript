const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    const rel = document.querySelector("#rel")

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML =  `Please Give a Valid Height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML =  `Please Give a Valid Weight ${weight}`
    } else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        // Show Result
        result.innerHTML = `<span>${bmi}</span>`
    }

    if (result < 18.6) {
        rel.innerHTML = "Under Weight"
    } else if (result >= 18.6 || result <= 24.9) {
        rel.innerHTML = "Normal Weight"
    } else {
        rel.innerHTML = "Over Weight"
    }
})