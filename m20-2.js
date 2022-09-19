// ** Inches to feet

// function feetToInches(inches){
//     const feet = inches/12;
//     return feet;
// }
// const myFeet = 144;
// const myHeight = feetToInches(myFeet);
// console.log(myHeight);


// ***miles to kilometer

// function milesTokilometer(miles){
//     const kiloMeter = miles * 1.6093;
//     return kiloMeter;
// }

// const distance = 12;
// const totalDistance = milesTokilometer(distance);
// console.log(totalDistance);




//**** */ Check even and odd number using function



// function isEven(number){
//     const remainder = number % 2;

// if (remainder === 0){
//      return true;

// }
// else{
//     return false;
// }
// }

// const checkEven = isEven(180);
// console.log(checkEven);



// ******leap year or not?

// function leapYear(year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }

//         return false;

// }
// const myLeapYear = leapYear(1960);
// console.log('my leap year:', myLeapYear);

// const herLeapYear = leapYear(1969);
// console.log('my leap year:', herLeapYear);



// *****Calculate Sum of all numbers of an array

// function getSumOfAnArray(numbers){

//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const elements = numbers[index];
//         sum = sum + elements;
//         // console.log(index, elements, sum);
//     }
//     return sum;

// }




// *****Get Odd Numbers of an array and get odd Sum of an array


// function getOddNumberOFAnArray(numbers){
//     const oddNumbers = [];
//         for( let i = 0; i < numbers.length; i++){
//             const index = i;
//             const elements = numbers[index];
//             if (elements % 2 === 1){
//                 console.log(index, elements);
//                 oddNumbers.push(elements); 
//             }

//         }
//         return oddNumbers;
// }


// const array1 = [54, 45, 33, 34, 77, 58, 74];
// const oddNumbers = getOddNumberOFAnArray(array1);
// console.log(oddNumbers);
// const sumOfOddNumbers = getSumOfAnArray(oddNumbers);
// console.log('sum of odd number is:', sumOfOddNumbers);


// ***Calculate Factorial of a number using for loop

// let sum = 0;
// for (let i = 1; i <= numbers; i++) {
//     sum = sum + i;
//     console.log(i, sum);
// }


// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (let i = 1; i <= numbers; i++) {
//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
// }

// const sum = sumOfNumbers(6);
// console.log(sum);


// ***multiplication

// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result = result * i;
//     }
//     return result;
// }
// const result = factorial(9);
// console.log(result);



//*** */ Factorial using a while loop or a decrementing loop


// function factorial(number) {
//     let result = 1;
//     for (let i = number; i >= 1; i--) {
//         result = result * i;
//     }
//     return result;
// }
// const number = 6
// const result = factorial(number);
// console.log('factorial number of:', number, 'is', result);



//*** */ by while-loop


function factorial(number) {
    let i = number;
    let result = 1;
    while (i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
const number = 6;
const result = factorial(number);
console.log('factorial number of:', number, 'is', result);