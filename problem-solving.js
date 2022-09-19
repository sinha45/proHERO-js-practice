// দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে?

// var b = 22;
// var a = 10;


// console.log(b % a);

// শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে।

// var number1 = 20;
// var number2 = 30;
// var number3 = number1 += 10;
// console.log(number3);


// *******parseInt, parseFloat, toFixed এইগুলা কি করে? 

// **parseInt

// var num1 = '32';
// var num2 = 40;

// var num3 = parseInt(num1);
// console.log(num3 + num2);


// **parseFloat

// var gpa = 3.48;

// var convertGpa = parseFloat(gpa);
// console.log(convertGpa);


// *****tofixed


// var sum1 = 0.1;
// var sum2 = 0.2;

// var sum = sum1 + sum2;
// sum = sum.toFixed(3); 
// {(koto ghor porjnto dekhabe)}

// console.log(sum);


//*** */ return


// function add(n1, n2){
//     console.log(n1, n2);
//     var sum = n1 + n2;

//     return sum;
// }
// var money = add(10,20);
// console.log("hello:", money);



//***** */ multiple ways to get and set object property


var shoppingCart = {
    goru: 50000,
    murgi: 700,
    sagol: 10000,
    hash: 800, 
    mas: 1000, 
    kobutor: 400
}

// propertyr value 
// system 1

var propertyName = shoppingCart.mas;
console.log(propertyName);

// system 2

var propertyName = shoppingCart["kobutor"];
console.log(propertyName);

// property , value ber korar jonno

var property1 = Object.keys(shoppingCart);
var property2 = Object.values(shoppingCart);

console.log(property1);
console.log(property2);


//** */ to set properties new value

// sys1

shoppingCart.mas = 300;
console.log(shoppingCart);

// sys2

shoppingCart['goru'] = 40000;
console.log(shoppingCart);

// sys3

var newProperty = "sagol";
shoppingCart[newProperty] = 9000;
console.log(shoppingCart);



