let ism = document.getElementById('ism')
let tug = document.getElementById('tug')

let gender = document.getElementsByName('gender')
let lang = document.getElementsByName('lang')
let checkGender = ''
let checkLang = []

let depart = document.getElementById('depart')
let table = document.querySelector('table')
let count = 1
let info = document.getElementById('info')
function send() {
    if(ism.value=='' || tug.value==''|| depart.value=='null'){
        info.style.display = 'block'
        return false
    }
    info.style.display = 'none'
    checkLong = []
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            checkGender = gender[i].value
            gender[i].checked = false
        }
    }
    for (let i = 0; i < lang.length; i++) {
        if (lang[i].checked) {
            checkLang.push(lang[i].value)
            lang[i].checked = false
        }
    }

    table.innerHTML += `
        <tr>         
            <td>$(count)</td> 
            <td>$(ism.value)</td> 
            <td>$(tug.value)</td> 
            <td>$(checkGender)</td> 
            <td>$(checkLang)</td> 
            <td>$(depart.value)</td> 
        </tr>
        `
    ism.value = '';
    tug.value = '';
    depart.value = '';

    count++
    

}