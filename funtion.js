// function doubleIt(number){
// const doubled = number * 2;
// console.log(number,doubled);
// }
// console.log('I will call function');
// doubleIt(15);
// console.log("/////////");
// doubleIt(30);
// console.log('////////');

// function add(price1, price2) {
//   const total = price1 + price2;
//   return total;
// }
// const bill = add(5, 80);
// console.log(bill);

// function add2(price1, price2) {
//   return price1 + price2;
// }
// const bill2 = add2(5, 80);
// console.log(bill, bill2);

// function doMath(num1, num2) {
//   const sum = num1 + num2;
//   const diff = num1 - num2;
//   const multiply = sum * diff;
//   const result = multiply / 2;
//   return result;
// }
// const result = doMath(10, 4);
// console.log(result);

// Even number

// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   }else{
//     return false;
//   }
// }
// console.log(isEven(5));
// console.log(isEven(2));

// function isOdd(number){
//     if(number % 2 === 1){
//         return true;
//     }
//     return false;
// }
// console.log(isOdd(5));
// console.log(isOdd(8));

// function evenSizedStr (str){
// const size = str.length;
// console.log(str, size);
// if(size % 2 === 0){
// console.log('even size');
// return true
// }else{
//     console.log('odd size');
//     return false
// }

// }
// evenSizedStr('Dhaka');
// evenSizedStr('faka');

// function doubleOrTriple(number, doDouble) {
//   if (doDouble === true) {
//     const result = number * 2;
//     return true;
//   } else {
//     const result = number * 3;
//     return result;
//   }
// }
// console.log(5, true);
// console.log(5, false);

function numberOfElement(number){
    const len = number.length;
    return len;
}

function getAge (person){
    const age = person.age;
    return age;
}