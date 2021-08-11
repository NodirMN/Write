
function f2c(f){
    return 5/9*(f-32)
}

console.log(f2c(125),'celciy')

function d2mm(d){
    return d*25.4   // 1 dyum === 2.54 sm(mm)  <-- 10*
}
console.log(d2mm(15),'mm')

function m2km(m){
    return m*1.6094
}
console.log(m2km(100),'km')

function fact(n){
    let p = 1
    for (let i=1;i<=n;i++){
        p*=i
    }
    return p
}
console.log(fact(5))

function findLetter(text,l){
    let num = 0
    for (let i=0;i<text.length;i++){
        if (text[i].toLowerCase()==l.toLowerCase()){
            num++
        }
    }
    return num
}

let t = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga dolore illo consequatur maxime esse in eaque ipsa, nihil quod officiis impedit doloremque magni voluptate repudiandae iure eius nostrum voluptatem labore?'
console.log(findLetter(t,'d'))

function calcText(text,price){
    return text.length*price
}

console.log(t.length)
console.log(calcText(t,150))

function checkPass(pass){
    // length>=8
    // 2 number 
    let n = 0
    for (let i=0;i<pass.length;i++){
        if (parseInt(pass[i])>=0){
            n++
        }
    }
    return (n>=2 && pass.length>=8) ? true : false
}

console.log((checkPass('eaahfs12'))?'Paroliz ishonchli':'Paroliz ishonchsiz')