let pul = 10000000
let valyuta = 'dollar'

switch (valyuta) {
    case 'dollar':
        console.log(pul/10.50);
        break;
    case 'yevro':
        console.log(pul/125);
        break;
    case 'rub':
        console.log(pul/12.77);
        break;    
    default:
        console.log('xatolik');
        break;
}