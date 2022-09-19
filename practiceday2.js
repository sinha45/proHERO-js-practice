// ***fahrenheit to celsius

// function cToF(celsius) {
//     var cTemp = celsius;
//     var cToFahr = (cTemp * (9 / 5)) + 32;
//     var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }


// ***celsius to fahrenheit 

// function fToC(fahrenheit) {
//     var fTemp = fahrenheit;
//     var fToCel = (fTemp - 32) * (5 / 9);
//     var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// }
// cToF(90);
// fToC(39);


// কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 


let marks = 34;

switch (true) {

    case (marks >= 80 && marks <= 100):

        console.log('you got a+');
        break;
    case (marks >= 70 && marks <= 79):

        console.log('you got a');
        break;
    case (marks >= 60 && marks <= 69):

        console.log('you got b+');
        break;
    case (marks >= 50 && marks <= 59):

        console.log('you got b');
        break;
    case (marks >= 40 && marks <= 49):

        console.log('you got c');
        break;
    case (marks >= 33 && marks <= 39):

        console.log('you got Pass');
        break;
    case (marks > 100):
        console.log('not applicable');

    default:
        console.log('fail');

}


