const numbers = [2,41,52,5,22,5];
// const output = [];
// for(let i = 0;i < numbers.length;i++){
//     const element =  numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);
// function square(element){
//     return element * element;
// }
// const result = numbers.map(square);
// console.log(result);
const result = numbers.map(function(element, index, array){
    //console.log(element, index, array);
})
const result2 = numbers.map(x => x * x);
console.log(result2);

const filTer = numbers.filter(x => x > 20);
console.log(filTer)
