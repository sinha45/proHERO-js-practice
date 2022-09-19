//(advanced) Multi-layer discount price calculation;


// 1. If ticket number is less than 100; per ticket price: 100tk;
// 2. If ticket number is more than 100 but less than 200tk; first 100 tickets will be 100/ticket;rest will be 90tk per ticket piece.

//IF you buy more than 200 tickets

//first 100 tickets ----> 100tk;
//101-200 tickets ----> 90tk;
// 200+ ----> 70tk



function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketPrice = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100price = 100 * second100Rate;
        const restTicketPrice = restTicketQuantity + restTicketRate;
        const totalCost = first100Price + second100price + restTicketPrice;
        return totalCost;
    }
}
const price = ticketPrice(120);
console.log('the price is:', price);




