let title = document.getElementById('title')
let text = document.getElementById('text')
let date = document.getElementById('date')
let member = document.getElementById('member')

let main = document.querySelector('.main')
let task = document.querySelector('.task')

let people = []

if(localStorage.getItem('human')){
    try {
        people = JSON.parse(localStorage.getItem('human'))
        show()
    } catch (error) {
        localStorage.removeItem('human')
    }
}

function show(){
    main.innerHTML = `<div class="m_title"><b><b></div><div class="m_text"></div><div class="bottom font"><div class="left"></div><div class="right"></div></div>`
    for(let i=0;i<people.length;i++){
        let tr = `
        <div class="m_title"><b>${people[i].title}</b></div>
        <div class="m_text">${people[i].text}</div>
        <div class="bottom font">
            <div class="left">${people[i].date}</div>
            <div class="right">${people[i].member}</div>
        </div>
        `
        main.innerHTML += tr
    }
}

function showTask (){
    task.classList.toggle('modal')
}

function submit(){

    let person = {
        title: title.value,
        text: text.value,
        date: date.value,
        member: member.value
    }

    people.push(person)
    show()
    showTask()
    let ready = JSON.stringify(people)
    localStorage.setItem('human',ready)
}
