let promis = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Client tomonidan ma`lumot so`raldi')
        console.log('..........');
        resolve()
    }, 2000)
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Backend client tomonidan so`rov qabul qildai va DB ga so`rov jo`natdi');
            console.log('..........');
            resolve()
        }, 2000)
    })
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('DB backend  so`rov bo`yicha ma`lumotlar izlab topildi va qayta jo`natildai');
            console.log('..........');
            // reject('Db da so`ralgan m`lumotlar topilmadi')
            resolve()
        }, 2000)
    })
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Backend DB dan kelgan ma`lumotni qyta ishlab clientga jo`natdi');
            console.log('..........');
            resolve()
        }, 2000)
    })
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Client Backenddan kelgan ma`lumotni interfeysda ifodalaydi ');
            console.log('..........');
            resolve()
        }, 2000)
    })
}).catch(function(error){
    console.log(eror);
})
promis.finally(function(){
    console.log('Operatsiya tugadi');
})