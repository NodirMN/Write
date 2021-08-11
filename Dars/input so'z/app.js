let soz = document.createElement('input')
let knopka = document.createElement('button')
knopka.textContent = 'Yarat'
knopka.addEventListener('click', function () {
    let n = soz.value
    for (let i = 1; i <= n; i++) {
        let massEl = document.createElement('input')
        massEl.classList.add('mass')
        massEl.setAttribute('placeholder', `${i}-massiv element qiymatini yozig`)
        document.body.appendChild(massEl)
    }
    let hisob = document.createElement('button')
    hisob.textContent = `Massiv yeg'indisi hisobla`
    hisob.addEventListener('click', function () {
        let elements = document.querySelectorAll('.mass')
        let summa = 0
        elements.forEach(element => {
            summa += element.value * 1
        });
        console.log(summa)
    })
    document.body.appendChild(hisob)
})
document.body.appendChild(soz)
document.body.appendChild(knopka)
document.body.appendChild(document.createElement('hr'))