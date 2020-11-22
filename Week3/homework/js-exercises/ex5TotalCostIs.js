'use strict'
const cartForParty = {
    beer: 4.99,
    chips : 1.99,
    cheese : 3.49,
    banana : 1.50,
    kiwi : 3.99
}
const totalPrice = (calculateObj) => {
    let total = 0;
    for (let item in calculateObj){
        total += calculateObj[item];
    }
    console.log(`total: € ${total}`)
}
totalPrice(cartForParty);

// now if we make any new object it will calculate the total price for it 

const cartForluch ={
    meat : 4.99,
    chicken : 5.99,
    rise : 2.00,
    tomato : 1.99
}
totalPrice(cartForluch);

// that is cool






// 