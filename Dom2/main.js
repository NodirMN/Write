let a = document.querySelector('.target')
let inp = document.getElementById('inp')
let res = document.getElementById('res')
// console.log(a);
// ///stillar
// a.style.color = 'green'
// a.style.border = 0
// //a.textContent="Закать званок" //text qilb beradi
// // /// tag yozish
// // a.innerHTML = '<i>Qo`ng`iroqqa buyurtma  qilish</i>' 


// ///class
// a.classList.add('show') //qoshadi
// a.classList.remove('current') //o'chiradi
// console.log(a.classList.contains('shows')); // consolga chiqarish

// //atrebute
// console.log(a.getAttribute('href'))
// a.setAttribute('href', 'https://ya.ru')


// //event hodisa :hover
let i = 0

// function rand(n) {
//     return parseInt(Math.random()*n)
// }

// a.addEventListener('click',function(){
//     // console.log(++i); //nechi marta bosa ko'rasstadi
//     // a.style.backgroundColor = 'black'
//     let n = inp.value
//     let arr = []
//     for (let i=0; i<n; i++) {
//         arr.push(rand(100))

//     }
//     console.log(arr);
// })
function rand(n) {
    return parseInt(Math.random()*n)
    
}
a.addEventListener('click',function(){
    // console.log(++i); //nechi marta bosa ko'rasstadi
    // a.style.backgroundColor = 'black'
    let n = inp.value
    let arr = []
    for (let i=0; i<n; i++) {
        arr.push(rand(100))

    }
    res.textContent = arr
})