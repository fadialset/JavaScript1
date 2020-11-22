'use strict'
let shoppingCart = ['Banana', 'Milk'];


function addToShoppingCart(groceryItem){
shoppingCart.push(groceryItem);
for (let i = 0; i < shoppingCart.length; i++){ 
 if (shoppingCart.length > 3){
     shoppingCart.shift();
 }
};

return `You bought ${shoppingCart}`;
};


console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('Fries'));
console.log(addToShoppingCart('ananas'));