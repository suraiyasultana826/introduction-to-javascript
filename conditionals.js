// var isGraduated = false;
// var salary = 5000;
// if(isGraduated == true || salary > 50000){
//     console.log('esho biye kori')
// }
// else{
//     console.log('tor kopale biye nai')
// }
// function add(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// const result1 = add(12, 13);
// const result2 = add(35, 7);
// const finalResult = add (result1, result2);
// console.log(finalResult);
// var student = {
//     id: 115,
//     Name:'solayman khan',
//     class : 9,
//     marks:98
// }

// var mobile = {
//     brand : 'samsung',
//     price : 19000,
//     storage: '64gb',
//     camera:'7MP'
// }
// console.log(mobile.brand);
// console.log(student);
// var shoppingCart={
//     books:3,
//     sunglass: 1,
//     keyboard: 5,
//     mouse:1,
//     pen:25
// }
// var penCount = shoppingCart.pen;
// var properties = Object.keys(shoppingCart);
// // console.log(penCount)
// console.log(properties);
// function inchToFeet(inches){
//     const feet = inches / 12;
//     return feet;
// }

// const dadaInches = 144;
// const dadaFeet = inchToFeet(dadaInches);
// console.log(dadaFeet);


// function isEven(number){
//     const remainder = number % 2;
//     if(remainder === 0){
//         // console.log('number is even')
//         return true;
//     }
//     else{
//         // console.log('number is odd')
//         return false;
//     }
// }
//  const myNumberIsEven = isEven(15);
//  console.log(myNumberIsEven);


function getSum(numbers){
    let sum =0;
   for(let i = 0; i <numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
   }
   return sum;
}

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i =0; i< numbers.length; i++){
        const index = i ;
        const element = numbers[index];
        if(element % 2 !==0){
            console.log(index,element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
 const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);