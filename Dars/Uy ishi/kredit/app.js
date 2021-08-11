let summa = +prompt('Kreedit summasini kiriting:');
let period = +prompt('Nechi oyga olmoqchisiz?');
let rate = 0.229;

let ann = 0;
let monthRate = rate / 12;
let topPart = +(summa * monthRate).toFixed(2)
let bottomPart = +(1 - (1/ Math.pow(monthRate + 1, period)))


ann  =(topPart / bottomPart).toFixed(2)
console.log("Birinchi to'lov:", + ann);


/////////////
let dif = 0;
let persent = 0;
let remainSumma = summa;
let maninDebt = +(summa/period).toFixed(2);
let table = document.querySelector(".table");
let str = "<table><caption>Kredit:</caption><tr><th>Qarz:<th><th>Asosiy qarz:<th><th>Foyizi %:<th><th>Har oy to'lov:<th><tr>";
for ( let i = 0; i<table.period;i++){
str += `<tr><th>${remainSumma}</th><th>${maninDebt}</th>`
persents = +(remainSumma * monthRate).toFixed(2);
str += `<tr>${persents}</tr>`;
remainSumma -= maninDebt;
remainSumma = +(remainSumma).toFixed(2)
dif = persents + maninDebt;
str += `<th>${dif}</th></tr>`


}
str += "</table>";
table.innerHTML=str;