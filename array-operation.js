/* 
! sumOfNumber
function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }return sum;
}
const nums = [4, 2, 2, 6];
const sum = sumOfNumber(nums);
console.log("Sum of number is: ", sum);
todo
*/

/* 
 !Even Number
function evenNumberOnly (numbers){
for(const number of numbers){
    if(number % 2 === 0){
        console.log(number);
    }
}
}

const numbers = [5, 8, 91, 24, 6];
todo: evenNumberOnly(numbers);
*/

/* 
! Odd Number
function oddNumberOnly (numbers){
    const odd = [];
    for(const number of numbers){
        if(number % 2 === 1){
            console.log(number);
            odd.push(number);
        }

    }
    return odd;
}
const numbers = [5, 8, 91, 24, 6];
const odds = oddNumberOnly(numbers);
todo console.log(odds);
*/

/*
! sumOfOddNumber
 function sumOfOddNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 1){
            console.log(number);
            sum = sum + number
        }
    }
    return sum;
}
const sum = sumOfOddNumber(numbers);
todo console.log(sum);
 */

/* 
! mineGame
function MindGame(inputNumber) {
  if (inputNumber > 0) {
    const multiplication = inputNumber * 3 + 10;
    const davidNumber = multiplication / 2;
    const result = davidNumber - 5;
    return result;
  }
  return "positive number deo age";
}

const ruselt = MindGame(5);
console.log(ruselt);
todo
*/
/*
! function EvenOdd(str) {
  if (typeof str !== 'string') {
    str = str.toString(); 
  }
  const len = str.length;
  if (len % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

 todo console.log(EvenOdd(5246786));  */

// !is Less or Greater Than Seven

// function IsLGSeven(number) {
//   const sum = number - 7;
//   console.log(sum);
//   if (sum < 7) {
//     return sum;
//   }else{
//     return number * 2;
//   }
// }
// const num = IsLGSeven(-15);

/* 

 */

/*
! const myArray = [1, 2, 3];
function FindingBadData(input) {
  const emptyData = [];
  for (let badData of input) {
    if (badData < 0) {
     const data = emptyData.push(emptyData);
      console.log(data);
    }
  }
  
}
 todoconst BadNumber = FindingBadData(myArray);
 */

//  inch thake feet bar korar program

/* function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction); // Number of complete feet
  const inchRemaining = inch % 12; // Remaining inches after converting to feet
  const result = `${feetNumber} feet ${inchRemaining} inches`;
  return result;
}

const shuvoHeight2 = inchToFeet2(75);
 todo console.log(shuvoHeight2);
 */

//  mail To kilometer a convert

/* function mileToKilometer (mile){
const kilo = mile * 1.60934;
return kilo;
}
console.log(mileToKilometer(3));


// kilometer to mils convert

function kilometermils(kilo){
  const mils = kilo * 0.621371;
  return mils
}
console.log(kilometermils(2)); */

// simple logic
/* function icLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return true;
  }
}
console.log(icLeapYear(2023)); */

/* 
1.those year that is not divisible by 100, is the year is dividible by 4:
then it will be a leap year
2.
*/

/* function isLeapyear (year2){
  if(year2 % 100 !== 0 && year2 % 4){
    return true;
  }else if(year2 %100 === 0 && year2 % 400){
    return true
  }else{
    return false;
  }
}
const isLeap = isLeapyear(2100);
const isLeap2 = isLeapyear(2400);
const isLeap3 = isLeapyear(1900);
const isLeap4 = isLeapyear(2052);

console.log(isLeap, isLeap2, isLeap3, isLeap4); */

/* 
! function takes an array as parameter
!gives me the average of the odd number in the array
*/

/* function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  // console.log(odds);
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log("average of the odd number is : ", avg); */

/* 
! array has some duplicate elements []

*/
/* 
const biryanikhor = ['abul', 'babul', 'cabul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDublicate(array){
  const uniue = [];
  for(const item of array){
   if(uniue.includes(item) === false){
    uniue.push(item);
   }
  }
  return uniue;
}
const uniueArray = noDublicate(numbers);
console.log(uniueArray); */

/* 
/* !function Max, Min
*/

// !sob chaya choto somkha bar korar niyam

/* const min = Math.min(45, 20,400, 5);
console.log(min); */

// ! sob chaya bro sonkha bar korar niyam

/* const max = Math.max(45, 21, 65, 90, 40, 23);
console.log(max); */

// console.log(Math.PI);

/* 
!- thakle (+) + thakle (-)
gap thakle saita (-) (+) diya thik kore dai
console.log(Math.abs(-88)); */

/*
!round diya purno sonkha kore dibe
Example:
console.log(Math.round(2.25));
console.log(Math.round(3.50)); */

/*
! floor diya 2.90 er .90 bad diya dibo
console.log(Math.floor(2.90));
!ceil diya 2.90 er man 3 kore dibo
console.log(Math.ceil(2.90)); */

/* 
! 0.9000000 ete sonkha asbe akek time
console.log(Math.random());
console.log(Math.random()* 10);
const rand = Math.round(Math.random()*10);
console.log(rand); */

/*
!date()
const today = new Date();
const date = new Date('2062-10-19');
// console.log(date.getMonth());
// console.log(data.getDay());
consy spexificCata = new Date(2091, 0,26);
console.log(spexificCata);
 */

/* let a = 5;
let b = 7;

console.log(a, b);

const temp = a;
a= b;
b= temp;
console.log(a, b);

let x = 5;
let y = 7;

console.log(x, y);

[x, y] = [y, x];
console.log(x, y); */

/*
! array thake baro number bar korar niyam
const height = [65, 66, 68, 78, 60, 65, 66];

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const max = getMax(height);
console.log("max value is: ", max);
 */

/*
!wood calculator
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perBedWood = 50;
  const perTableWood = 10;

  const chairTotalWood = chairQuantity * perChairWood;
  const bedTotalWood = bedQuantity * perBedWood;
  const tableTotalWood = tableQuantity * perTableWood;

  const totalWood = chairTotalWood + bedTotalWood + tableTotalWood;
  return totalWood;
}

const wood = woodQuantity(0, 0, 1);
todo console.log("Wood needed:", wood); */

/*
!nija korte hobe

shirt prize = 500;
pant prize 300;
show prize = 900; */

/* const prices = [20000, 16000, 50000, 10000, 12000, 30000, 35000];

function getMin(numbers) {
  let min = numbers[0]; 
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log('Cheapest one is:', cheap);
 */

// object er khatre

/* const phones = [
  { Name: "Oppo", prize: 30000, color: "black" },
  { Name: "Vivo", prize: 20000, color: "black" },
  { Name: "Iphone", prize: 100000, color: "black" },
  { Name: "Walton", prize: 24000, color: "black" },
];

function getCheapestPhone(phones) {
  let min = phones[0];

  for (let phone of phones) {
    if (phone.prize < min.prize) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(phones);
console.log(cheap);
 */

/* const products = [
  {name : 'shompho', prize: 300},
  {name : 'chiruni', prize: 200},
  {name : 'shirt', prize: 100},
  {name : 'pant', prize: 1200},
]

function getShoppingTotal(products){
  let total = 0;
  for(const product of products){
    total = total + product.prize;
  }
  return total;
}
const shop = getShoppingTotal(products)
console.log('ajjke onek khoraj ', shop);
 */

// sob chaiya bro number bar korar niyam

// function giveBiggestNumber(array){
//   let biggest = array[0];
//   for(let i = 1; i < array.length; i++){
//   if(array[i] > biggest){
//     biggest = array[i];
//   }
//   }
// return biggest;
// }
// const numbers =[2,4, 21, 5, 6,23,20, 9];
// const result = giveBiggestNumber(numbers);
// console.log(result);

function giveBiggestNumber(array) {
   if(!Array.isArray(array)){
    return 'it is not an array';
   }


  let biggest = array[0];
  for (const number of array) {
    if (number > biggest) {
      biggest = number;
    }
  }
  return biggest;
}
const numbers = true;
// const numbers = [2, 4, 21, 5, 6, 23, 20, 9];
const result = giveBiggestNumber(numbers);
console.log(result); // Output: 23
