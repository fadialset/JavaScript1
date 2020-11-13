'use strict'
const drinkTray = [];

const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5 ; i++){
    drinkTray[i] = drinkTray.push(drinkTypes[i]);
}
console.log(drinkTray);



// drinkTray.push(drinkTypes[i]);