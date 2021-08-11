let text = document.getElementById('text')
let btn  = document.getElementById('btn')
let res  = document.getElementById('res')
let sw   = document.getElementById('switch')

btn.addEventListener('click',function(){
    switch (sw.value) {
        case 'f2s':
                res.textContent = 5/9*(text.value-32)+' selsiy'
            break;
        case 'm2km':
                res.textContent = text.value*1.60943+' km'
            break;
        case 'd2mm':
                res.textContent = text.value*25.4+' mm'
            break;
    
        default:
            break;
    }
})