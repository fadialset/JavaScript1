'use strict'
function giveCompliment(name){
    const complemnts = ['great','awsome','amazing','incredible','lovley','cute','atractive','handsome','pretty','fantastic'];
    const randomItem = complemnts[Math.floor(Math.random()*complemnts.length)];
    return `You are ${randomItem}, ${name}`
}

giveCompliment('Inou');
giveCompliment('Tjebbe');
giveCompliment('Darlene');

// console.log(giveCompliment('Inou'));
// console.log(giveCompliment('Tjebbe'));
// console.log(giveCompliment('Darlene'));
