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

function mileToKilometer (mile){
const kilo = mile * 1.60934;
return kilo;
}
console.log(mileToKilometer(3));


// kilometer to mils convert

function kilometermils(kilo){
  const mils = kilo * 0.621371;
  return mils
}
console.log(kilometermils(2));