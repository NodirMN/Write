let form = document.querySelector('form')
form.addEventListener('submit',(event)=>{
    let fullname = form.fullname.value
    let age = +form.age.value
    let bplace =form.bplace.value
    let hobby = form.value
    send({fullname,age,bplace,hobby})
})
const send = (human) => {
    let user = {
        ...human,
        data: new Data().tolocaleDateString()
    }
    console.log(user);
}