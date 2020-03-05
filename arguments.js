function add(num1, num2){
    const arguMents = [...arguments];
    const result = num1 + num2 + arguMents[2];
    return result
}
const resultFinal = add(2,4,50);
console.log(resultFinal);