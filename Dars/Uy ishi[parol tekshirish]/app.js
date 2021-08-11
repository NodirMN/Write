// function CheckPass(pass) {
//     if (pass.value.length < 5) {
//         alert("Ishonchsiz parol!");
//         return false;
//     }
// }
let inp = document.getElementById('inp')
let pass = document.getElementById('current')
let res = document.getElementById('res')
function checkPass(pass) {
    
    for (let i = 0; i < pass.length; i++) {
        if (parseInt(pass[i]) >= 0) {
            n++
        }
    }
    return (n >= 2 && pass.length >= 8) ? true : false
}
pass.addEventListener('click', function () {
    res.value.textContent = inp

})