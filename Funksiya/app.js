///Function///
let n = 15
let b = summa(n)

function summa(a) {
    let sum = 0
    for (let i = 1; i <= a; i++) {
        sum += i
    }
    return sum
}
console.log(n, " ga cha bolgan sonlar yigindisi => ", b)
// summa(20)

////////////////////
let ns = 15
let bs = summa(ns, 'Juft')

function summa(a = 15, b) {
    let sum = 0
    let start = (b == 'toq') ? 1 : 2

    for (let i = start; i <= a; i += 2) {
        sum += i
        console.log(i);
    }
    return sum
}
console.log(n, " ga cha bolgan sonlar yigindisi => ", b)

/////////////////////
function katta(soz) {
    return soz.toUpperCase()
}
console.log(katta('Salom Hammaga'));


/////////////////////Palindirom
function palindrom(s) {
    let a = s.split('').reverse().join('')
    if (a.toLowerCase() == s.toLowerCase()) { //kotta harifda chaqirsa boladi
        console.log('palendrom')
    } else {
        console.log('palendrom emas')
    }
}
palindrom('Nodir')

///////////////////
function sumMas(mas) {
    let sum = 0
    for (let i = 0; i <= mas.length; i++)
        sum += mas[i]
    return sum
}
let massiv = [12, 5, 1, 44, 43, 67, 53, 12, 2]
let result = sumMas(massiv)
console.log(massiv)
console.log(result)

///////////////////omad lotto

function sharqonalotto(n) {
    return parseInt(Math.random() * n)

}
let arr = []
for (let i = 0; i < 6; i++) {
    arr.push(sharqonalotto(36))
}
console.log(arr);


///////////////////
function sumArr(massivSoni) {
    let arr = []
    for (let i = 0; i < massivSoni; i++) {
        arr.push(sharqonalotto(36))
    }
    let s
    return arr
}
sumArr(10)
/////////////////// uy ishi 1f=c
function f2c(f) {
    return 5 / 9 * (f - 32)
}
console.log(f2c(125), 'celciy');

////////////////// 2 d = mm
function d2mm(d) {
    return d * 25.4
}
console.log(d2mm(15), 'mm');

///////////////// 3  m2km
function m2km(m) {
    return m * 1.6094
}
console.log(m2km(130), 'km');

////////////// 4
function fact(n) {
    let p = 1
    for (let i = 1; i <= n; i++) {
        p *= i
    }
    return p
}
console.log(fact(5));

//////////////////5
function findLetter(text1, l) {

    let num = 0
    for (let i = 0; i < text1.length; i++) {

        if (text1[i].toLowerCase() == l.toLowerCase()) {
            num++

        }
    }
    return num
}
let t = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi velit modi illo dolorum aut. Voluptas quae, quasi magni ad officiis blanditiis tempora possimus dolorum, illum ex minus rem, est rerum?'
console.log(findLetter(t, 'd'));

///////////////// telegraf
function calctText(text, price) {
    return text.length * price

}
console.log(calctText(t, 5));

//////////////////parol tekshirish
function checkPass(pass) {
    for (let i = 0; i < pass.length; i++) {
        if (parseInt(pass[i]) >= 0) {
            n++
        }
    }
    return (n >= 2 && pass.length >= 8) ? true : false

}
console.log((checkPass('e2thfs12')) ?'Ishonchli parol': 'Ishonchsiz parol')