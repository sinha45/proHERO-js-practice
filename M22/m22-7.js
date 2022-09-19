//Calculate the total cost of the products in a shopping cart


const shoppingCart = [{ name: 'shoe', price: 1200, quantity: 2 },
{ name: 'pant', price: 1000, quantity: 3 },
{ name: 'shirt', price: 1400, quantity: 3 }];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;

    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);