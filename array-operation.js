// function sumOfNumber(numbers){
//     let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//     }return sum;
// }
// const nums = [4, 2, 2, 6];
// const sum = sumOfNumber(nums);
// console.log("Sum of number is: ", sum);



// Even Number
// function evenNumberOnly (numbers){
// for(const number of numbers){
//     if(number % 2 === 0){
//         console.log(number);
//     }
    
// }
// }

// const numbers = [5, 8, 91, 24, 6];
// evenNumberOnly(numbers);

// Odd Number

function oddNumberOnly (numbers){
    for(const number of numbers){
        if(number % 2 === 1){
            console.log(number);
        }

    }
}
const numbers = [5, 8, 91, 24, 6];
oddNumberOnly(numbers)
