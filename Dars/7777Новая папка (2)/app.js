let title = document.getElementById('title')
let yosh = document.getElementById('abaut')
let sana = document.getElementById('day')
let otdel = document.getElementById('name')
let bloc = document.querySelector('bloc')


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
    let count = 1
    bloc.innerHTML = '<div class = "bloc"><div class = "title"id = "title" > < /div><div class = "abaut"id = "abaut" > < /div> <f div class = "ass" ><div class = "day"id = "day" >  < /div> <div class = "name"id = "name" > < /div> < /div ></div>'
    for (let i = 0; i < persons.length; i++) {
        let list = `
           <div class = "bloc"><div class = "title"id = "title" > Design LMS system < /div> <
               div class = "abaut"
           id = "abaut" > Lorem ipsum dolor sit amet consectetur adipisicing elit. < /div> <
          f     div class = "ass" >
               <
               div class = "day"
           id = "day" > 08.02 .2021 < /div> <
               div class = "name"
           id = "name" > Ochilov J. < /div> <
               /div> 
               /div>
           
           
        `
        bloc.innerHTML += list
        count++
    }
}

function showModal() {
    modal.classList.toggle('active')
}


function add() {
    const list = {
        title: title.value,
        abaut: abaut.value,
        sana: day.value,
        otdel: otdel.value
    }
    title.value = ''
    abaut.value = ''
    day.value = ''
    otdel.value = ''

    persons.push(list)
    showModal()
    show()
    let ready = JSON.stringify(persons)
    localStorage.setItem('humans', ready)
}