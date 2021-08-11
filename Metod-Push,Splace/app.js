let arr = [22,34,13,5,4,55,89,12]
let humans = ['Alisher', 'Begzod', 'Farruh', 'Ergash']
console.log(arr.length);
console.log(arr,'Ozi');
arr.push(77,'Push qoshilgan oxiriddam');
console.log(arr);

////////////////Push oxiriga qoshadi

console.log(humans);
humans.push('Nodirbek')
console.log(humans);

/////////////Unshift  boshiga qo'shadi
humans.unshift('Polvon')
console.log(humans);


///////////Pop oxiridan o'chiradi
humans.pop() ///yananpopi yozsaya yana ochadi malumot ochib ketmidi  lekim malumot qoladi
console.log(humans)

//////////////////////// o'chirilgan malumot chaqirish
let change = humans.pop()
console.log(humans);
console.log(change);

///////////////////Shift boshidigini olib beradi
let startHumans = humans.shift();
console.log(humans);
console.log(startHumans);


////////////////// Splice O'chirish
humans.splice(1,1)
console.log(humans);

////////////////// Sort
var arr = [4, 23, 54, 67, 1, 2, 7, 90, 5, 12, 34, 21, 8, 18, 30];

arr.sort(function (a, b) {
    return a - b;
});
