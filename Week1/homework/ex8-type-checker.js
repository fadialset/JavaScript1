'use strict';
function typeChecker (x , y){
    if (typeof x === typeof y){
        console.log('same type');
    }else{
        console.log('not the same type');
    }
}
typeChecker();

// declare 4 variables 2 must be strings and 2 must be objects

let string1 = "Real Madrid";
let string2 = "is the best team";

let object1 = {
    firstName = 'fadi',
    lastName = 'alset',
    age = 26
}

let object2{
    firstName = 'Sergio',
    lasName = 'Ramos',
    age = 34
}

typeof string1 = 