let height = document.createElement('input')
let width = document.createElement('input')
let color = document.createElement('input')
let bgc = document.createElement('input')
let fontSize = document.createElement('input')
let textContent = document.createElement('input')
let border = document.createElement('input')
let borderColor = document.createElement('input')
let borderRadius = document.createElement('input')
let padding = document.createElement('input')
let textAlign = document.createElement('input')

let button = document.createElement('button')

button.textContent = 'button'

function ifo(){
    if(textContent.value ==''){
        button.textContent = 'button'
    }
}
button.style.display = 'block'

height.setAttribute('placeholder','height')
width.setAttribute('placeholder','width')
color.setAttribute('placeholder','color')
bgc.setAttribute('placeholder','bgc')
fontSize.setAttribute('placeholder','fontSize')
textContent.setAttribute('placeholder','textContent')
border.setAttribute('placeholder','border')
borderColor.setAttribute('placeholder','borderColor')
borderRadius.setAttribute('placeholder','borderRadius')
padding.setAttribute('placeholder','padding')
textAlign.setAttribute('placeholder','textAlign')



button.addEventListener('click',function(){
    
    button.style.height = height.value
    button.style.color = color.value
    button.style.width = width.value
    button.style.backgroundColor = bgc.value
    button.style.fontSize = fontSize.value
    button.innerHTML = textContent.value
    ifo()
    button.style.border = border.value
    button.style.borderColor = borderColor.value
    button.style.borderRadius = borderRadius.value
    button.style.padding = padding.value
    button.style.textAlign = textAlign.value

    button.style.display = 'block'

})

document.body.appendChild(height)
document.body.appendChild(width)
document.body.appendChild(color)
document.body.appendChild(bgc)
document.body.appendChild(fontSize)
document.body.appendChild(textContent)
document.body.appendChild(border)
document.body.appendChild(borderColor)
document.body.appendChild(borderRadius)
document.body.appendChild(padding)
document.body.appendChild(textAlign)
document.body.appendChild(button)

