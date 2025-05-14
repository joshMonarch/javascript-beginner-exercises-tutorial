let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here

    up50 = guests <= 50
    up100 = !up50 && guests <= 100
    up200 = !up100 && guests <= 200
    more200 = !up200

    if (up50) {
        cost = 4000;
    } else if (up100) {
        cost = 10000
    } else if (up200) {
        cost = 15000
    } else if (more200) {
        cost = 20000
    }
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
