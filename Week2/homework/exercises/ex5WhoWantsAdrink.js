'use strict'

//  this solution is for this case only 
const drinkTray = [];

const drinkTypes = ['cola', 'lemonade', 'water'];

for (let i = 0; i < 5 ; i++){
    if (i === 0 || i === 1){
        drinkTray.push(drinkTypes[0])
    }else if (i === 2 || i === 3 ){
        drinkTray.push(drinkTypes[1])
    }else{
        drinkTray.push(drinkTypes[2])
    }
}
console.log("Hey guys, I brought " + drinkTray.join(", ") + "!");

/*  there is another solution we can use if there are a lot of items in the array not only 5 
I had to comment for syntax error
*/

// const drinkTray = [];

// const drinkTypes = ['cola', 'lemonade', 'water'];
// const numberPerDrink = 2;
// const totalDrinks = 5;
// drinkTypes.forEach(drink => {
//   for(let i = 0; i <= 1; i++) {
//     if (drinkTray.length < totalDrinks) {
//       drinkTray.push(drink);
//     }
//   }
// })
// console.log("Hey guys, I brought ", drinkTray.join(", ") + "!");