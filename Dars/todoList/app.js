let title = document.getElementById('title')
let text = document.getElementById('text')
let date = document.getElementById('date')
let author = document.getElementById('author')

let list = document.querySelector('.task__list')
let tasks = []

if (localStorage.getItem('tasks')){
    try {
        tasks = JSON.parse(localStorage.getItem('tasks'))
        show()
    } catch (error) {
        localStorage.removeItem('tasks')
    }
}

function show(){
    list.innerHTML = ''
    let count = 0
    tasks.forEach(task => {
        let txt = `
        <div class="task__box">
            <button onclick='del(${count})'></button>
            <div class="task__title">${task.title}</div>
            <div class="task__text">${task.text}</div>
            <div class="task__bottom">
                <div class="task__deadline">${task.date}</div>
                <div class="task__author">${task.author}</div>
            </div>
        </div>
        `
        list.innerHTML += txt
        count++
    })
}

function del(index){
    tasks.splice(index,1)
    show()
    save()
}

function showModal(){
    document.querySelector('.modal').classList.toggle('show')
}

function add(){
    const task = {
        title: title.value,
        text: text.value,
        date: date.value,
        author: author.value,
    }
    tasks.push(task)
    save()
    show()
    title.value = ''
    text.value = ''
    date.value = ''
    author.value = ''
    showModal()
}

function save(){
    let arr = JSON.stringify(tasks)
    localStorage.setItem('tasks',arr)
}