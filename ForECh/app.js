let links = document.querySelectorAll('ul a')
// console.log(links);
let pict = document.querySelector('.pict')


links.forEach(link => {
            link.addEventListener('mouseenter', function () {
                        // console.log('mouse enter');
                       pict.style.backgroundImage = `url(${link.getAttribute('data-img')})`
                        
    })
    })