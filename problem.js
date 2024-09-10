// const x = [3, 2, true, 'hello', false, 34, {name: "Rima"}];


// function countBoolean(arrray){
//     if(!Array.isArray(x)){
//         return 'please provide array';
//     }

//     let count = 0;
//     for(let item of arrray){
//         if(typeof item === 'boolean'){
//             count++;
//         }
//     }
//     return count;
// }

// const result = countBoolean(x);
// console.log(result);



function rickshVara(peoples){

    const bus = 50;
    const micro = 15;
    const rickshVaraConst = 20;


    const remainAfterBus = peoples % bus;

    const remainAfterMicro = remainAfterBus % micro;

    return remainAfterMicro * rickshVaraConst;
}

console.log(rickshVara(234));