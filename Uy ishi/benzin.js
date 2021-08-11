let actan = 98
let litir = 10
let benzin = {
    92: 7700,
    95: 8900,
    98: 10000,
    dizel: 9000,
}

switch (actan) {
    case 92:
        console.log(litir*benzin[92])
        break;
    case 95:
        console.log(litir*benzin[95])
        break;
    case 98:
        console.log(litir*benzin[98])
        break;
    case 'disel':
        console.log(litir*benzin.dizel)
        break;

    default:
        console.log('Xatolik');
        break;
}