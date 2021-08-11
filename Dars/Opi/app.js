class KattaEl {
    constructor(tagName) {
        this.$el = document.createElement(tagName)
    }
}
class Quti extends KattaEl {
    constructor(color, size, text, tagName) {
        super(tagName)
        this.color = color
        this.size = size
        this.text = text
    }
    create() {
        this.$el.style.backgroundColor = this.color
        this.$el.style.width = this.$el.style.height = this.size + 'px'
        this.$el.textContent = this.text
        document.body.appendChild(this.$el)
        return this.$el
    }
}
let button = new Quti('yellow', 450, 'Bu matin', 'button', 24)
console.log(button);
let btn = button.create()


////////////////////////////////////////////////////////


class CarModel {
    constructor(color = 'black', type = 'sedan') {
        this.color = color
        this.type = type
    }
}
class Ford extends CarModel {
    constructor(model, year, distance, color, type) {
        super(color, type)
        this.model = model
        this.year = year
        this.distance = distance
    }
    getDistancePerYear() {
        let currentYear = new Date().getFullYear()
        return this.distance / (currentYear - this.year)
    }
}

let carA = new Ford('Mustang', 2009, 2500, 'yellow', 'sportcar')
console.log(carA);
console.log(carA.getDistancePerYear());


////////////////////////////////////////////////////////


class user {
    constructor(login,pass,rols) {
        this.login = login
        this.pass = pass
        this.rols = rols
    }
}
class UserA extends user {
    constructor(login, pass, rols) {
        super(login, pass, rols)
        
    }
    getUsers() {
        console.log('123ta user bor');
    }
    getUseredById() {
        console.log('Nodir M.N');
    }
    getUsersById() {
        console.log('23 ta user o`chirildi');
    
    }
}
let bigbboss = new UserA('boss','qwerty','user')
bigbboss.getUsers()



//////////////////////////////////////////////////


class SimpleUsers extends UserS {
    constructor(login,pass,rols){
    super(login,pass,rols)
    }
    sendMassage(){
        console.log('xabar jo`natildi');
    }
    settings(){
        console.log('parol o`zgartirildi');
    }
}

let bg = new SimpleUsers('bboy','Paarol123','userN')
bboy.sendMassage()


//////////////////////////////////////////////////