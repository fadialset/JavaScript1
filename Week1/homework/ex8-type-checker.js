'use strict'
let string1 = "coding is cool";
let string2 = "coding is fun";

let myInfo ={
    firstName : "fadi",
    lastName : "alset",
    age : 26
};


let myHobbis = {
    firstHobby : "Football",
    secoundHobby : "riding a bick",
};

function typeChecker (var1 , var2){
    if (typeof var1 === typeof var2){
        console.log("SAME TYPE")
    }else {
        console.log("NOT THE SAME")
    }
}

typeChecker(string1 , string2);
typeChecker(string1 , myInfo);
typeChecker(string1 , myHobbis);

typeChecker(string2 , string1);
typeChecker(string2 , myInfo);
typeChecker(string2 , myHobbis);



console.log(typeof string1);
console.log(typeof myInfo);