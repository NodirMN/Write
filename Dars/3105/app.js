let ism = document.getElementById('ism')
let yosh = document.getElementById('yosh')
let sana = document.getElementById('sana')
let otdel = document.getElementById('otdel')
let modal = document.getElementById('modal')
let table = document.querySelector('table')

let persons = []

if (localStorage.getItem('humans')){
    try {
        persons = JSON.parse(localStorage.getItem('humans'))
        show()
    } catch (error) {
        localStorage.removeItem('humans')
    }
}

function show(){
    let count = 1
    table.innerHTML = '<thead><tr><th>№</th><th>Ism</th><th>Yosh</th><th>Tu`gilgan sana</th><th>Bo`lim</th><th></th></tr></thead>'
    for(let i=0;i<persons.length;i++){
        let tr = `
            <tr>
                <td>${count}</td>
                <td>${persons[i].ism}</td>
                <td>${persons[i].yosh}</td>
                <td>${persons[i].sana}</td>
                <td>${persons[i].otdel}</td>
                <td><button onclick='del(${count-1})'>X</button></td>
            </tr>
        `
        table.innerHTML += tr
        count++
    }
}

function del(a){
    // console.log(persons[a])
    persons.splice(a,1)
    let ready = JSON.stringify(persons)
    localStorage.setItem('humans',ready)
    show()
}

function showModal(){
    modal.classList.toggle('active')
}


function add(){
    const person = {
        ism: ism.value,
        yosh: yosh.value,
        sana: sana.value,
        otdel: otdel.value 
    }
    ism.value = ''
    yosh.value = ''
    sana.value = ''
    otdel.value = ''
    
    persons.push(person)
    showModal()
    show()
    let ready = JSON.stringify(persons)
    localStorage.setItem('humans',ready)
}