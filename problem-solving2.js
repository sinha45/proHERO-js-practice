//**** */ switch case, break


// **bad way

const color = 'yellow';

// if( color === 'white'){
//     console.log("you are white");
// }
// else if( color === 'red'){
//     console.log("you are red");
// }
// else if( color === 'blue'){
//     console.log("you are blue");
// }
// else if( color === 'white'){
//     console.log("you are white");
// }
// else if( color === 'yellow'){
//     console.log("you are yellow");
// }
// else{
//     console.log("you are kala");
// }


// **good way using for-in, case, break;

// switch (color){
//         case 'white':
//         console.log('you are white');
//         break;
//         case 'red':
//         console.log('you are red');
//         break;
//         case 'black':
//         console.log('you are black');
//         break;
//         case 'yellow':
//         console.log('you are himu yellow');
//         break;
//         case 'grey':
//         console.log('you are grey');
//         break;

//         default: console.log('you are discolor');
// }


// function foo(){
//     var goru = 'foo';
//     console.log(goru);
//     bar();
// }
// function bar(){
//     var lodu = 'bar';
//     console.log(lodu);
  
// }
// foo();





// function myFunction(Date myDate, String myString)
// {
//     console.log(myDate, myString);

// }
// myFunction(Sunday, 'goru');

function movie(){
    return "Din-The day";
    return "Poran";
    return "Hawa";
  }
  console.log(movie());