let links = document.querySelectorAll('ul a')
let pict = document.querySelector('.pict')
links.forEach(link => {
    link.addEventListener('mouseenter',function(){
        pict.style.backgroundImage = `url(${link.getAttribute('data-img')})`
    })
})