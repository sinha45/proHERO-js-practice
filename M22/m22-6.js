// Find the cheapest phone from an array of phone objects



const phones = [{ name: 'samsung', camera: 20, price: 30000, color: 'darkblue' },
{ name: 'Iphone', camera: 30, price: 50000, color: 'blue' },
{ name: 'Pixel', camera: 25, price: 40000, color: 'silver' },
{ name: 'oppo', camera: 30, price: 20000, color: 'black' },
{ name: 'vivo', camera: 10, price: 10000, color: 'red' }];


function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];

        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);