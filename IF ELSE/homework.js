let bb = 5
console.log('///////');
switch (bb) {
    case 1:
        console.log('yomon')
        break
    case 2:
        console.log('qoniqarsiz')
        break
    case 3:
        console.log('qoniqarli')
        break
    case 4:
        console.log('yahshi')
        break
    case 5:
        console.log('a`lo')
        break
    default:
        console.log('Xatolik');
}


//////////////////
let pul = 20000
let valyuta = 'yevro'
switch (valyuta) {
    case 'dollar':
        console.log('dollar:', pul / 10500)
        break

    case 'yevro':
        console.log('yevro:', pul / 1200)
        break

    case 'rubl':
        console.log('rubl:', pul / 145)
        break
    default:
        console.log('Xatolik')
}
///////////////////////
let day = 6

switch(day){
    case 1:
        console.log('Dushanba');
        break
    case 2:
        console.log('Seshanba');
        break
    case 3:
        console.log('Chorshanba');
        break
    case 4:
        console.log('Payshanba');
        break
    case 5:
        console.log('Juma');
        break
    case 6:
        console.log('Shanba');
        break
    case 7:
        console.log('Yakshanba');
        break
        default:
        console.log('Xatolik')
    }
