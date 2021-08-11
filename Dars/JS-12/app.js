let input = document.createElement('input')
let button = document.createElement('button')
let table = document.createElement('table')

function rand() {return parseInt(Math.random() * 100)}
button.textContent = 'Click me'
button.addEventListener('click', function () {
    let n = input.value
    table.innerHTML = ''
    table.setAttribute('border', '1')
    table.setAttribute('width', '100%')
    for (let i=1;i<=n;i++) {
        let tr = document.createElement('tr')
            for (let j=1;j<=n;j++){
                let td = document.createElement('td')
                td.textContent = rand()
                tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    document.body.appendChild(table)
})
input.setAttribute('type','number')
input.setAttribute('placeholder',`Jadval o'chamini yozing`)

document.body.appendChild(input)
document.body.appendChild(button)