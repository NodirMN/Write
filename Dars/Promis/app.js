let promis = new Promise(function (resolve, rject) {
        setTimeout(function(){
            console.log('Kliyent tomonidan ma`lumot so`raldi');
            console.log('..........');
            resolve()
        }, 1000)
    }).then(function(){
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                console.log('Backend kliyent tomonidan so`rov qabul qilindi va  BD ga so`rov jo`natildi');
                console.log('..........');
                resolve()
            }, 1000)
        })
    }).then(function(){
            return new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        console.log('BD backend so`rovi bo`yicha malumotlar izlab topildi va qyta jo`natildi');
                        console.log('..........');
                        resolve()
                    }, 1000)
                }).then(function () {
                    return new Promise(function (resolve, reject) {
                        setTimeout(() => {
                            console.log('BD backend so`rovi bo`yicha malumotlar izlab topildi va qyta jo`natildi');
                            console.log('..........');
                            resolve()
                        }, 1000)
                    })
                }).then(function () {
                        return new Promise(function (resolve, reject) {
                                setTimeout(() => {
                                    console.log('BD backend so`rovi bo`yicha malumotlar izlab topildi va qyta jo`natildi');
                                    console.log('..........');
                                    resolve()
                                }, 1000)
                            }).catch(function (error){console.log(error)})
                                    promis.finally(function() {
                                        console.log('Operatsiya tugadi');
                                    })
                                