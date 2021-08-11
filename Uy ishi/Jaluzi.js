let tanlash = 'alyumin'
let olchami = {
    eni: 2,
    boyi: 2
}
let turi = {
    plastic: 10000,
    mato: 25000,
    alyumin: 30000
}

switch (tanlash) {
    case 'plastic':
        console.log(olchami.boyi*olchami.eni * turi.plastic);
        break;
    case 'mato':
        console.log(olchami.boyi*olchami.eni * turi.mato);
        break;
    case 'alyumin':
        console.log(olchami.boyi*olchami.eni*turi.alyumin);
        break;
    default:
        console.log('Xato');
        break;
}

