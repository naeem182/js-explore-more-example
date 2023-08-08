/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/
function price(ticket_quantity) {
    const first100 = 100;
    const secound100 = 90;
    const rest = 70;
    if (ticket_quantity <= 100) {
        let ticket_price = ticket_quantity * first100;
        return ticket_price;
    }
    else if (ticket_quantity < 200) {
        let first100_price = 100 * first100;
        let rest_quantity = ticket_quantity - 100;
        let rest_ticket_price = rest_quantity * secound100;
        ticket_price = first100_price + rest_ticket_price;
        return ticket_price;

    }
    else {

        const first100Price = 100 * first100;
        const second100Price = 100 * secound100;
        const restTicketQuantity = ticket_quantity - 200;
        const restTicketPrice = restTicketQuantity * rest;
        ticket_price = first100Price + second100Price + restTicketPrice;
        return ticket_price;
    }


}

const inprice = price(201);
console.log('price: ', inprice);