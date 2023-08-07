// function printInfo(name){
//     console.log('valo hye jao', name)
// }

// printInfo('masud')
// printInfo(15)


// function add(x,y){
//     let total = x + y;
//     return total;
    
// }
// console.log(add(3,4))


// function information(info){
//     const sentence = 'amr nam ' + info.name + ", amr bari" + info.address+", amr age" + info.age;
//     console.log(sentence)
// }
// const myInfo = {
//     name: "tanu",
//     age:56,
//     address: 'rajshahi'

// }
// information(myInfo)



// function factorial(number){
//     if(number === 0 || number === 1){
//         return 1;
//     }
//     let result = 1;
//     for(let i = number; i>=1; i--){
//         result = result * i;
//     }
//     return result;
// }
// console.log(factorial(5));
// console.log(factorial(0));


//fine the largest number of an array
// function findLargest(x){
//     let largest = x[0];
//     for(let i = 1; i<x.length; i++ ){
//         // const currentItem = x[i]
//         if(x[i]> largest){
//             largest= x[i];
//         }
//     }
//     return largest;
// }

// const arr = [5, 12, 7, 9 ,34 , 24,4];
// console.log(findLargest(arr))



//find the largest string

// function biggestFriend(friends){
//     let biggest = friends[0];
//     for(let i =1; i<friends.length; i++){
//         if(friends[i].length> biggest.length){
//             biggest= friends[i]
//         }
//     }
//     return biggest;
// }

// const friends = ['arif', 'rokib', 'saki',
// 'sunny', 'mosaddek', 'babul']
//  console.log(biggestFriend(friends))



// function add(a,b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'please give two numbers'
//     }
//     return a + b;
// }
// console.log(add(3,4))


const arr =[2, -5, -7, -13];
function findBadData(arr){
    let count = 0;
    for(let item of arr){
        if(item<0){
            count++;
        }
    }
    return count;
}
console.log(findBadData(arr));