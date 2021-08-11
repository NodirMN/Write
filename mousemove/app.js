let ball = document.querySelector('.ball')

window.addEventListener('mousemove',function(event){
    let x = event.clientX
    let y = event.clientY
    ball.style.transform = `translate(${x}px, ${y}px)`
})