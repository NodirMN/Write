
////////// ToUpperCase() hariflari kottalashadi

////////// ToUpperCase() hariflari kottalashadi



let texts = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit alias eum dignissimos sint! Aut beatae eligendi dolore omnis dolor asperiores accusantium, iure repellat, sit animi veritatis nisi consequatur cum?'
console.log(texts.length);
console.log(texts.toUpperCase());//kotta
console.log(texts.toLocaleLowerCase());//kichkina harif
console.log(texts.replace('i', 'Nodir')); //1tasini orniga almashtirish
console.log(texts.replaceAll('i', 'Nodir')); //hammsaini orniga almashtirish

console.log(texts.split(' ')); //(. , -)masivga aylantirib beradi
console.log(texts.indexOf('ipsum')); //topib beradi
var text_mass = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit.", "Magnam", "odit", "alias", "eum", "dignissimos", "sint!", "Aut", "beatae", "eligendi", "dolore", "omnis", "dolor", "asperiores", "accusantium,", "iure", "repellat,", "sit", "animi", "veritatis", "nisi", "consequatur", "cum?"]
console.log(text_mass.join(' '));//yopishtirib beradi

let nameob ='Nodir' /// teskarisiga chiqrish
let revName = ''
console.log(nameob);
for (let i = nameob.length-1; i>=0; i--){
    revName += nameob[i]
}
console.log(revName);
console.log(nameob.split('').reverse().join(''));//qisqa usuli


//////////////////////////////////////////////////

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit alias eum dignissimos sint! Aut beatae eligendi dolore omnis dolor asperiores accusantium, iure repellat, sit animi veritatis nisi consequatur cum?'
console.log(text.length,'Ta harif');

let son = 0
let soz = 0
for (let s = 0; s < text.length; s++) {
    if (text[s] == 'a' || text[s] == 'o' || text[s] == 'i' || text[s] == 'u' || text[s] == 'e'){
        
        son++
    }
    if (text[s] == ' ') {
        soz++
    }

}
console.log('unli hariflar soni =',son);
console.log('so`zlar soni=', ++soz);

//////////////////////////////////////
// Xarif almashtirish 1

let lat = {
    'a' : 'a',
    'b' : 'б',
    's' : 'с',
    'h' : 'х',
    'l' : 'л'
}
let zapas = text
console.log(zapas);
for (let i = 0; i < zapas.length; i++) {
    if (lat[zapas[i]]){
        zapas = zapas.replace(zapas[i],lat[zapas[i]])
    }
}
console.log(zapas);
///////////////////////2


let simbol = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit alias eum dignissimos sint! Aut beatae eligendi dolore omnis dolor asperiores accusantium, iure repellat, sit animi veritatis nisi consequatur cum?'
let space = (simbol.split(" ").length - 1);
console.log(space);
console.log('Simvollar soni: ',simbol.length - space)




///////////////////////////////////3
let simbolClearn = 'Nodirbek yaxshimi'

    let sim = '';
    for (let i = 0; i < simbolClearn.length; i++) {
        if (simbolClearn.lastIndexOf(simbolClearn[i]) == simbolClearn.indexOf(simbolClearn[i])) {
            sim += simbolClearn[i];
        }
    }


console.log(sim);
/////////////////////////////5

let palindrom = ['Aziz']


    for (var i = palindrom.length; i > 0; i--) {
        if (palindrom[i] = (palindrom.length) - 1) {
            console.log('palindrome sozlar:',palindrom);
        } else {
            console.log('palindrome emsas:');
        }
    }
         