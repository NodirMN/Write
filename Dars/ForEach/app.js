let links = document.querySelectorAll('.head a')
links.forEach (link =>{
    link.addEventListener('click',function(event){
        event.preventDefault()
        let a = link.getAttribute('href').replace('#','')
        if (document.querySelector('.page_box.show')){
            document.querySelector('.page_box.show').classList.remove('show')
        }
        let item =document.querySelector('.page_box.'+a)
        item.classList.add('show')
    })
})