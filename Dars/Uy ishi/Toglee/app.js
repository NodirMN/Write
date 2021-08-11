let text = document.getElementById('text')
let texts = document.getElementById('texts')
let date = document.getElementById('data')
let otdel = document.getElementById('otdel')
let name = document.getElementById('name')


let madal = document.getElementById('madal')
let main = document.getElementById('main')

let persons = []

if (localStorage.getItem('humans')) {
    try {
        persons = JSON.parse(localStorage.getItem('humans'))
        show()
    } catch (error) {
        localStorage.removeItem('humans')
    }
}

function show() {

    main.innerHTML = ' <div class = "title"></div><div class = "abaut"></div><div class = "day"></div> <div class = "name"></div>'

    for (let i = 0; i < persons.length; i++) {
        let tr = `<div class="title" >${persons[i].text}</div>
             <div class = "abaut">${persons[i].texts}</div>
             <div class = "day">${persons[i].date}</div>
             <div class = "names">${persons[i].otdel}</div>
             <div class = "name">${persons[i].name}</div>
             
        `
        main.innerHTML += tr
        count++
    }
}

function showModal() {
    modal.classList.toggle('active')
}


function add() {
    let person = {
        text: text.value,
        texts: texts.value,
        date: data.value,
        otdel: otdel.value
    }
    text.value = ''
    texts.value = ''
    data.value = ''
    otdel.value = ''

    persons.push(person)
    showModal()
    show()
    let ready = JSON.stringify(persons)
    localStorage.setItem('humans', ready)
}