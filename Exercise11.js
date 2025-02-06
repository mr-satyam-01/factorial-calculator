// create a function that returns the factorial of a number using the reduce function and for loop
function factoria(num) {
    let num2 = 1;
    for (let i = num; i > 0; i--) {
        num2 = num2 * i;
    }
    return num2;
}
console.log(factoria(5));




function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())            //it creates the array from 0 to the given number  
    let c = arr.slice(1,).reduce((a, b)=> a*b)                //it multiplies the elements of the array from 1 to the end
    return c
}
console.log(factorial(5));