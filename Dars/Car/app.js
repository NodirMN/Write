let car = {
    color:`red`,
    year:0,
    type:`Aclass`,
    distance: 0,
    distancePERyear: function () {
        return this.distance/(new DataCue().getFull)
        
    }
    }
}

let spark ={
    model:`Hechbek`,
    company:`GenerelMotors`,
    distance:16000,
    year:2016,
    __proto__:car,
}

