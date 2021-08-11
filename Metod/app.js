//////////////////////////////1
let humans = ['Alisher', 'Begzod', 'Sherzod', 'Jahon']
let extHumans = [0]
console.log(humans);
humans[0] = humans[humans.length - 1]
humans[humans.length - 1] = extHumans
console.log(humans);

/////////////////////////////2




//////////////////////////////3


let anyNumber = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let i = 0;
let maximum = 0;
while (i < anyNumber.length) {
    if (anyNumber[i] > maximum) {
        maximum = anyNumber[i]
    }
    i++;
}
console.log("Katta massiv: " + maximum)



/////////////////////////4
let mas_max = [4, 23, 54, 67, 1, 2, 7, 90, 5, 12, 34, 21, 8, 18, 30]
let max = mas_max[0]
let max_index = 0
console.log(mas_max)
for (let i = 0; i < mas_max.length; i++) {
    if (max < mas_max[i]) {
        max = mas_max[i]
        max_index = i
    }
    if (max < mas_max[i]){
        max = mas_max[i]
        max_index = i
    }
}
console.log('Massivning eng katta elemrnti', max);




// //////////////////////////////5





// /////////////////////////////////6


// //////////////////////////////////7


// //////////////////////////////////////8



//////////////////////////////////9
var arr = [4, 23, 54, 67, 1, 2, 7, 90, 5, 12, 34, 21, 8, 18, 30];

arr.sort(function (a, b) {
    return a - b;
});

console.log(arr);
/////////////////////////////////9
let mas = [4, 23, 54, 67, 1, 2, 7, 90, 5, 12, 34, 21, 8, 18, 30];
console.log(mas);
for (let i = 0; i < mas.length; i++) {
    for (let j = 0; j < mas.length; j++) {
        if (mas[i] < mas[j]) {
            let res = mas[i]
            mas[i] = mas[j]
            mas[j] = res
        }
    }
    console.log(i, mas);
}
console.log(mas);


///////////////////////////////////
//enk kotta va eng kickik element joylarini almashtiring

let mass_max = [4, 23, 54, 67, 1, 2, 7, 90, 5, 12, 34, 21, 8, 18, 30]
let maxs = mas_max[0]
let maxs_index = 0
let min = mas_max[0]
let min_index = 0
console.log(mas_max)
for (let i = 0; i < mass_max.length; i++) {
    if (maxs < mass_max[i]) {
        maxs = mass_max[i]
        maxs_index = i
    }
    if (min > mass_max[i]) {
        min = mass_max[i]
        min_index = i
    }
}
mass_max[maxs_index]= min
mas_max[min_index] = max
console.log(mass_max);
console.log('Massivning eng katta elemrnti', maxs, maxs_index);
console.log('Massivning eng kichik elemrnti', min, min_index);