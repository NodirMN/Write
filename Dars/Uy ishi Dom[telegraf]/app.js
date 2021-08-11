let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let empity = document.getElementById('empity')
function tel(text, price) {
    let sum = 0
    sum = text.length * price
    return sum
}
btn.addEventListener('click', function(){
    empity.textContent = tel(inp.value,2)
})