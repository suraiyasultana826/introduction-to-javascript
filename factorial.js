// function sumOfNumbers(number){
//     let sum = 0;
//     for(let i = 1; i <= numbers; i++){
//         sum = sum + i;
//         console.log(i,sum);
//     }
//     return sum;
// }
function getFactorial(number){
    let factorial = 1;
    for(let i =1; i <= number ; i++){
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}
const factorial = getFactorial(12);
console.log('factorial of 12 is:', factorial);