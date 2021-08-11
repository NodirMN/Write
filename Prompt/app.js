// let user = {
//     name: 'Nodir',
//     age: 26,
//     bplace:'Toshkent',
//     show:function(){
//         console.log('Mening ismin', this.name);
//     }
// }


// let userA = {
//     height: 1.8,
//     __proto__:user
// }


// console.log(userA);

// let color = ["red", "Blue","Green"]
// console.log(color);


// let car = {
//     color:'black',
//     year: 0,
//     type: 'sedan',
//     distance: 0,
//     distancePerYear: function(){
//         return this.distance/(2021-this.year)
//     }
// }

// let carA = {
//     model:'cobalt',
//     company:'GM',
//     distance: 16000,
//     year:2016,
//     __prompt__: car
// }
// console.log(carA.distancePerYear());


let year = new Date()
console.log(year.getDate(), year.getFullYear(),year.getHours());