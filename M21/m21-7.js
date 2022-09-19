// **largerNumberOfArray**//

function largeNumber(numbers) {

    let superior = numbers[0];
    console.log('superior', superior);
    for (let i = 0; i < numbers.length; i++) {
        console.log('i', i)
        const index = i;
        console.log('index', index);
        const elements = numbers[index];
        console.log('elements', elements);
        if (elements > superior) {
            superior = elements;
        }

    }
    return superior;


}


const totalNumbers = [234, 453, 34, 544, 34, 554, 343, 434, 32, 455, 545];
const largest = largeNumber(totalNumbers);
console.log('the largest number of the array is', largest);