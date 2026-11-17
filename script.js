const priceTotal = document.getElementById("price-total")
const priceEntry = document.getElementById("price-entry")
const buttonCheck = document.getElementById("button-check")
const resultSection = document.getElementById("result")
const resultTotal = document.getElementById("result-total")
const resultEntry = document.getElementById("result-entry")
const resultStatus = document.getElementById("result-status")
const financingForm = document.getElementById("financing-form")

financingForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const total = Number(priceTotal.value)
    const entry = Number(priceEntry.value)
    resultTotal.textContent = total
    resultEntry.textContent = entry
    resultSection.hidden = false

    console.log(resultSection.hidden)


})
