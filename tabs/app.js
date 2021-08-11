let links = document.querySelectorAll('.head a')

links.forEach(link => {
    link.addEventListener('click',function(event){
        event.preventDefault()
        let a = link.getAttribute('href').replace('#','')
        // let pageBoxs = document.querySelectorAll('.page_box')
        // pageBoxs.forEach(page=> {
        //     page.style.display = 'none'
        // })
        if (document.querySelector('.page_box.show')){
            document.querySelector('.page_box.show').classList.remove('show')
        }
        let item = document.querySelector('.page_box.'+a)  
        item.classList.add('show')
    })
})



let products = [
    {
        name: 'Apple',
        category: 'fruits',
        price: 4.53,
        img: 'assets/img/apple.jpg'
    },
    {
        name: 'Apple',
        category: 'fruits',
        price: 4.53,
        img: 'assets/img/apple.jpg'
    },
    {
        name: 'Apple',
        category: 'fruits',
        price: 4.53,
        img: 'assets/img/apple.jpg'
    }
]