// Swap variable, swap without temp, destructing//


let first = 5;
let second = 9;

console.log(first, second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);


// destructing //

[first, second] = [second, first];
console.log(first, second);