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