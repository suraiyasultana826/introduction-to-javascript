// var fruits = ['apple', 'banana', 'orange'];
// var index = fruits.indexOf('banana');
// console.log(index);
// fruits[1] = 'mango';
// console.log(fruits);
// fruits.pop('orange');
// console.log(fruits);
// fruits.push('watermelon')
// console.log(fruits);
// var me = 85;
// var tom = 66;
// var jane = 95;
// var peter =56;
// var john = 40;
// if(me>=80){
//     console.log('A grade');
// }
// else{
//     console.log('fail');
// }
// var one = 13;
// var two =79;
// var three = 45;
// if(one>two && one>three){
//     console.log('largest number is 13')
// }
// else if(two>one && two>three){
//     console.log('largest number is 79')
// }
// else{
//     console.log('largest number is 45')
// }
// var roastGiven = 0;
// while (roastGiven <7){
//     console.log('roast den , please')

//     roastGiven++;
//     console.log(roastGiven)
// }
// 
// var numbers = [45, 87, 332, 90, 32, 56, 98]
// for (var i =0; i<7; i++){
//     var number = numbers[i];
//     console.log(number);
// }
// for (var i =581; i<=623; i+=2){
//     console.log(i);
// }
// var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];
// for (var i = 0; i<items.length; i++){
//     var item = items[i];
//     if(item == 'pen'){
//         break;
//     }
//     console.log(item);
// }
// var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41,25, 98];

// for (var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     if(number > 50){
//         continue;
//     }
//     console.log(number);
// }
// for(var i = 30 ; i<=86; i++){
//     if(i==44){
//         break;
//     }
//     console.log(i)
// }
// var items = ['iphone', 'realme', 'samsung'];
// var i =0;
// while ( i<items.length){
// var item = items[i];
// i++;
// console.log(item);
// }
// var myScore = 85;
// var tomScore = 66 ;
// var janeScore = 95;
// var peterScore = 56;
// var johnScore = 40;
// if(myScore >=80){
//     console.log('A grade')
// }
// else if(myScore >=60 && myScore <80)
// {
//     console.log('B grade')
// }
// else if(myScore >=50 && myScore <60)
// {
//     console.log('C grade')
// }
// else if(myScore >=40 && myScore <50)
// {
//     console.log('D grade')
// }
// else{
//    console.log('Fail') 
// }

// function getAverage (assignment1, assignment2, assignmnet3){
//     const total = assignment1 + assignment2 + assignmnet3;
//     const average = total/3;
//     return average;
// }
// const assignment1Marks = 60;
// const assignment2Marks = 58;
// const assignment3Marks = 59;
// var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log('my average so far: ', myAverage);



// function getMinute(hour){
//     const minute = hour*60;
//     return minute;

// }
//  const mainResult= getMinute(3);
// console.log(mainResult  ,'Minute')


// function getOddNumbersOfAnArray(numbers){
//     const oddNumbers = [];
//     for(let i =0; i< numbers.length; i++){
//         const index = i ;
//         const element = numbers[index];
//         if(element % 2 !==0){
//             console.log(index,element);
//             oddNumbers.push(element);
//         }
//     }
//     return oddNumbers;
// }

// const myNumbers = [12, 65, 45, 78, 32, 45, 91];
//  const oddNumbers = getOddNumbersOfAnArray(myNumbers);
// console.log(oddNumbers);


// function findLeapYear(years){
//     const leapYear = [];
//     for(let i = 0 ; i< years.length; i++){
//         const index = i;
//         const element = years[index];
//         if((element % 400 ===0) || (element % 4 ===0 && element % 100 !==0)){
//             leapYear.push(element);
//         }
//     }

//     return leapYear;
// }
// const theYears = [2023, 2024, 2025, 2028, 2030];
// const leapYear = findLeapYear(theYears);
// console.log(leapYear);


// const userName = 'blackPink';
// const userInput = 'blackPinK';
// console.log(userName.toLowerCase());
// console.log(userInput.toUpperCase());
// console.log(userName.toLocaleLowerCase())
// if(userName.toLowerCase() === userInput.toLowerCase()){
//     console.log('valid user')
// }
// else{
//     console.log('invalid user');
// }


// const lyrics = 'tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay blte pari ni';
// const doesExist = lyrics.includes('pakhi');
// console.log(doesExist);
// if(lyrics.indexOf('sada') !== -1){
//     console.log('existing inside the string')
// }
// else{
//     console.log('cannot find it');
// }

// console.log(lyrics.startsWith('tumi'));
//  const fileName = 'mybiodata.pdf';
//  const otherfile = 'mypic.png';
//  fileName.endsWith('.pdf');
//  const parts = lyrics.split(' ')
//  const sentence = lyrics.split('.')
//  const chars = lyrics.split('')
//  const partial = lyrics.slice(5,8);
//  console.log(partial)
//  console.log(chars)
//  console.log(sentence);
//  console.log(parts);
//  const lines = ['tmi bondhu kala pakhi', 'ami jeno ki', 'boshonto kale tomay blte parini']
//  const newSong = lines.join('. ')
//  console.log(newSong);




//swap numbers
// let first = 5;
// let second = 7;
// console.log(first, second);
// const temp = first;
// first = second;
// second=temp;
//another method---- Destruturing
// [first, second] = [second, first];
// console.log(first, second);

// fibonacchi
// const fibo = [0,1];
// for(let i =2; i<=10; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


//if one element is more than one in an array 
// then remove the extra element

// const names =['abul', 'babul', 'ebul', 'kabul', 'gabul', 'abul', 'kabul', 'mabul', 'gabul'];
// function removeDuplicate(names){
//     const unique = [];
//     for(let i=0; i<names.length; i++){
//         const name = names[i];
//         if(unique.includes(name)  === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);



// for(let i = 1; i<=50; i++){
//     if(i % 3 === 0 && i % 5 ===0){
//         console.log('foobar');
//     }
//     else if(i % 3 === 0){
//         console.log('foo');
//     }
//     else if( i % 5 === 0){
//         console.log('bar');
//     }
//     else{
//         console.log(i);
//     }
// }


// function woodCalculator(chairQuality, tableQuality, bedQuality){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuality* perChairWood;
//     const tableWood = tableQuality * perTableWood;
//     const bedWood = bedQuality * perBedWood;

//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;

// }

// const totalWood = woodCalculator(2,2,5);
// console.log(totalWood);



// const phones = [
//     {name:'Samsung', camera: 12, storage: '32gb', price:36000, color:'silver'},
//     {name:'Walton', camera: 12, storage: '32gb', price:22000, color:'silver'},
//     {name:'iphone', camera: 12, storage: '32gb', price:82000, color:'silver'},
//     {name:'Xaomi', camera: 12, storage: '32gb', price:52000, color:'silver'},
//     {name:'Oppo', camera: 12, storage: '32gb', price:20000, color:'silver'},
//     {name:'Nokia', camera: 12, storage: '32gb', price:44000, color:'silver'},
//     {name:'HTC', camera: 12, storage: '32gb', price:62000, color:'silver'},
// ];
// function cheapestPhone(phones){
//     let cheapest = phones[0];
//     for(let i =0; i<phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const result = cheapestPhone(phones);
// console.log(result);


// const shoppingCart = [
//     { name: 'shoe', price: 1200, quantity: 2},
//     { name: 'shirt', price: 2200, quantity: 5},
//     { name: 'pant', price: 3700, quantity: 4},
//     { name: 'belt', price: 600, quantity: 3},
// ];
// function totalCost(products){
//     let sum = 0;
//     for(let i =0; i<products.length; i++){
//         const product = products[i];
//         const productTotal = product.price * product.quantity;
//         sum += productTotal;
//     }
//     return sum;
// }
// const expense = totalCost(shoppingCart);
// console.log(expense);

// একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


// const arr =[2, 8, 0, -3, 56, -98, 6];
// function countPositive(numbers){

//    const positiveNumbers = [];
//     for(let i=0; i<arr.length; i++){
//         const positive = arr[i];
//         if(arr[i]===0 || arr[i]>0){
//             positiveNumbers.push(positive)
//         }
//         else{
//             break;
//         }
//     }
//     return positiveNumbers; 
// }
// const result = countPositive(arr);
// console.log(result)


// ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// function feetToInch(feet){
//     return feet*12;
// }
// const result = feetToInch(2);
// console.log(result);


// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 
// এইবার ভালো করে খেয়াল করো। 
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 
// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। 
// আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 


// function paperRequirements(firstBook, secondBook, thirdBook){
//     const pagesOfFirstBook = firstBook * 100;
//     const pagesOfSecondBook = secondBook * 200;
//     const pagesOfThirdBook = thirdBook * 300;
//     const total = pagesOfFirstBook + pagesOfSecondBook + pagesOfThirdBook;
//     return total;


// }

// console.log(paperRequirements(1,1,1));




// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

function bestFriend(array) {
    let name = friendsName[0];
    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > name.length) {
           name= friendsName[i];

        } 

    }


    return name;
}
const friendsName = ['tanu', 'chagol', 'mongolllllll the mars']
const largestName = bestFriend(friendsName);
console.log(largestName);
