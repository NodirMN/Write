
// let nums = [3,7,12,5,3,8,23,89]
// // console.log(nums)
// // console.log(nums.length)
// let sum  = 1
// console.log(nums)
// for (let index=0;index<nums.length;index++){
//     if(nums[index]%2==0){
//         console.log(nums[index],sum)
//         sum*=nums[index]
//     }
// }

// console.log(sum)

// massiv elementlari orasidan juftlarining ko'paytmasi

// let n = 3

// for (let i=1;i<=10;i++){
//     console.log(i+' ning karra jadvali')
//     for (let j=1;j<=10;j++){
//         console.log(i+'*'+j+'='+j*i)
//     }
//     console.log('')
// }

// for !!!!    massiv element --->>> +++ sum

// o`rta = sum/length

// for !!!!    if (o`rta>mass[index]) log(mass[index])



// berilgan sonning bo'luvchilarini chop eting
// let f = 32 // 1 2 4 8 16 32

// for(let a=1;a<=f;a++){
//     if (f%a==0){
//         console.log(a)
//     }
// }


let arr   = [12,5,3,1,3,78,9,4,32]
let index = 0
let sum   = 0
console.log(arr)
while(index<arr.length){
    sum = sum + arr[index]
    index++
}
console.log('summa',sum)
let average = sum/arr.length
console.log('massiv elementlarining o`rtacha qiymati',average)
for(index=0;index<arr.length;index++){
    if (arr[index]<average){
        console.log(arr[index])
    }
}