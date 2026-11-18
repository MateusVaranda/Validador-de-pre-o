const priceTotal = document.getElementById("price-total")
const priceEntry = document.getElementById("price-entry")
const buttonCheck = document.getElementById("button-check")
const resultSection = document.getElementById("result")
const resultTotal = document.getElementById("result-total")
const resultEntry = document.getElementById("result-entry")
const resultStatus = document.getElementById("result-status")
const financingForm = document.getElementById("financing-form")
const resultBalance = document.getElementById("result-balance")


financingForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const total = Number(priceTotal.value)
    const entry = Number(priceEntry.value)

    // Formatação dos valores em reais
    const currency = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // Validação dos valores
    if (total <= 0 || entry <= 0) {
        alert("Informe valores maiores que zero.")
        return
    }
    if (entry > total) {
        alert("A entrada não pode ser maior que o valor da compra.")
        return
    }

    // Cálculos  dos valores
    const balance = total - entry
    const percentage = (entry / total) * 100

    // Exibição dos valores
    resultTotal.textContent = `Valor da compra: ${currency.format(total)}`
    resultEntry.textContent = `Valor da entrada: ${currency.format(entry)}`
    resultBalance.textContent = `Saldo restante: ${currency.format(balance)}`

    // Limpa da classes anteriores
    resultStatus.classList.remove("approved", "rejected")

    // Regra de aprovação na área de resultado
    if (percentage >= 20) {
        resultStatus.textContent = "Financiamento aprovado!"
        resultStatus.classList.add("approved")
    } else {
        resultStatus.textContent = "Financiamento reprovado! Entrada abaixo de 20%."
        resultStatus.classList.add("rejected")

    }

    // Exibe a seção de resultado, assim ela aparece no site.
    resultSection.hidden = false

})
