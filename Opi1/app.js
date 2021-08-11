
// function calculateYear(year){
//     let currentYear = new Date().getFullYear()
//     return currentYear-year
// }

// console.log(calculateYear(2006))

// const calculateYear = (year) => {
//     return new Date().getFullYear()-year
// }
// calculateYear = year => new Date().getFullYear()-year

// console.log(calculateYear(1992))
// console.log(calculateYear(2009))

// const user = {
//     fullName: 'ALisherov Kamol',
//     age: 27,
//     show(){
//         return 'Mening ismim '+this.fullName+', yoshim '+this.age
//     }
// }



// console.log(user.show())


let form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let fullname = form.fullname.value
    let age      = +form.age.value
    let bplace   = form.bplace.value
    let hobby    = form.hobby.value
    let bdate    = form.bdate.value
    let phone    = form.phone.value
    send({fullname,age,bplace,hobby,bdate,phone})
})
const send = (human) => {
    let user = {
        ...human,
        date: new Date().toLocaleDateString()
    }
    console.log(user)
}



// window.addEventListener('scroll',()=>{
//     if (window.scrollY>300)
//         document.querySelector('ul').classList.add('fixed')
//     else 
//         document.querySelector('ul').classList.remove('fixed')
    
// })