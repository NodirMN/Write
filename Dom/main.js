let a = document.querySelector('.target')
let inp = document.getElementById('inp')
let res = document.getElementById('res')
let i = 0
function rand(n){
    return parseInt(Math.random()*n)
}
a.addEventListener('click',function(){
    let n = inp.value
    let arr = []
    for (let i=0;i<n;i++){
        arr.push(rand(100))
    }
    res.textContent = arr
})