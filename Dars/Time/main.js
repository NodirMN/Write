// let box = document.querySelector('.box')
// setTimeout(function(){
//     box.classList.add('show')
// }, 5000)
let i = 0
function timer(){
    i+=0.5
    document.getElementById('res').textContent = i+' sekund'
    // if (i==20){
    //     clearInterval(timer)
    // }
}
let time = ''
function start(){
    time = setInterval(timer,500)
}
function stop(){
    clearInterval(time)
}