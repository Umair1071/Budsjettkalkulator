let inntekter = []
let utgifter = []

const inntektKnapp = document.getElementById("leggTilInntekt")
const utgiftKnapp = document.getElementById("leggTilUtgift")

inntektKnapp.addEventListener("click", function() {

    const navn = document.getElementById("inntektNavn").value
    const belop = Number(document.getElementById("inntektBelop").value)
    const type = document.getElementById("inntektType").value

    if (navn == "" || belop <= 0) {
        return
    }

    inntekter.push({
        navn: navn,
        belop: belop,
        type: type
    })

    document.getElementById("inntekter").innerHTML +=
        "<p>" + navn + ": " + belop + " kr - " + type + "</p>"

    document.getElementById("inntektNavn").value = ""
    document.getElementById("inntektBelop").value = ""

    beregnBudsjett()
})

utgiftKnapp.addEventListener("click", function() {

    const navn = document.getElementById("utgiftNavn").value
    const belop = Number(document.getElementById("utgiftBelop").value)
    const type = document.getElementById("utgiftType").value

    if (navn == "" || belop <= 0) {
        return
    }

    utgifter.push({
        navn: navn,
        belop: belop,
        type: type
    })

    document.getElementById("utgifter").innerHTML +=
        "<p>" + navn + ": " + belop + " kr - " + type + "</p>"

    document.getElementById("utgiftNavn").value = ""
    document.getElementById("utgiftBelop").value = ""

    beregnBudsjett()
})

function beregnBudsjett() {

    let totalInntekt = 0
    let totalUtgift = 0

    for (let inntekt of inntekter) {
        totalInntekt = totalInntekt + inntekt.belop
    }

    for (let utgift of utgifter) {
        totalUtgift = totalUtgift + utgift.belop
    }

    let saldo = totalInntekt - totalUtgift

    document.getElementById("totalInntekt").textContent = totalInntekt
    document.getElementById("totalUtgift").textContent = totalUtgift
    document.getElementById("saldo").textContent = saldo

    if (saldo < 0) {
        document.getElementById("saldo").style.color = "red"
    } else {
        document.getElementById("saldo").style.color = "green"
    }
}