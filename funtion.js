// function doubleIt(number){
// const doubled = number * 2;
// console.log(number,doubled);
// }
// console.log('I will call function');
// doubleIt(15);
// console.log("/////////");
// doubleIt(30);
// console.log('////////');

function add(price1, price2) {
  const total = price1 + price2;
  return total;
}
const bill = add(5, 80);
console.log(bill);

function add2(price1, price2) {
  return price1 + price2;
}
const bill2 = add2(5, 80);
console.log(bill, bill2);
