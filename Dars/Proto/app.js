let user = {
    name: `Alisher`,
    age:26,
    bplace: `Samarqand`,
    show:function(){
        console.log('Mening idmim', this.name);
    }
}

let userA = {
    height : 1.8,
    name:`Nodir`,
    __proto__:user
}
console.log(userA);