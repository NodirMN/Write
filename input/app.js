let text = document.getElementById('text')
let res = document.getElementById('res')
text.addEventListener('input',function(){
    res.textContent = text.value
})