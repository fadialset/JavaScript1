'use strict'
//My way to solve the project

function validateSumIsLargerThan16(number) {
  var sum = 0;
  for(let i = 0; i < number.length; i++) {
    sum = sum + Number.parseInt(number[i]);
  }
  return sum > 16;
} // this function Inou teached it to us I was stuck with knowing how to do the sum

function validateCreditNumber(number){
    const regexTwoDiffNumbersCCNum = /^(\d)\1*$/.test(number);
//  Input must be 16 characters
if (number.length !== 16){
    console.log(`Invalid! The input ${number} charecters must be 16`)
}else if (isNaN(number)){
    // All characters must be numbers
    console.log(`Invalid! The input ${number}  should contain only numbers`)
}else if (regexTwoDiffNumbersCCNum){
    // At least two different numbers should be represented
    console.log(`Invalid! The input ${number}  should contain at least 2 different types of numbers!`);
}else if (number % 2 !== 0) {
    // The last number must be even
    console.log(`Invalid! The input ${number}  last number must be even`);
}else if (!validateSumIsLargerThan16(number)){
    

// The sum of all the numbers must be greater than 16
    console.log(`Invalid! The input ${number} charecters sum must be greater than 16`);
}else{
   console.log("goood")
}
};

console.log(validateCreditNumber('a92332119c011122')); 
console.log(validateCreditNumber('4444444444444444')); 
console.log(validateCreditNumber('1111111111111110 ')); 
console.log(validateCreditNumber('6666666666661666')); 
console.log(validateCreditNumber('9999777788880000')); 



/////////////////////// what Inou teached us////////////////////


/*
function validateAllChsAreNumbers(number) {
  const parsedNumber = Number.parseInt(number);
  const isNumber = Number.isInteger(parsedNumber);
  return isNumber && parsedNumber.toString().length === number.length;
}

function validateDifferentElements(number) {
  var occurences = {};
  for(let i = 0; i < number.length; i++) {
    occurences[number[i]] = undefined;
  }
  var uniqueValues = Object.keys(occurences);
  return uniqueValues.length > 1;
}


function validateSumIsLargerThan16(number) {
  var sum = 0;
  for(let i = 0; i < number.length; i++) {
    sum = sum + Number.parseInt(number[i]);
  }
  return sum > 16;
}


function isEven(number) {
  return number % 2 === 0;
}


function validateCreditNumber(number) {
  if (number.length !== 16) {
    console.log(`Invalid! The input ${number} charecters must be 16`);
  }else if (! validateAllChsAreNumbers(number)) {
    console.log(`Invalid! The input ${number}  should contain only numbers`);
  }else if (! validateDifferentElements(number)) {
    console.log(`Invalid! The input ${number}  should contain at least 2 different types of numbers!`);
  }else if (! validateSumIsLargerThan16(number)) {
    console.log(`Invalid! The input ${number} charecters sum must be greater than 16`);
  }else if (! isEven(number[number.length - 1])) {
    console.log(`Invalid! The input ${number}  last number must be even`);
  }else 
  console.log(`Success! The input ${number}  is a valid credit card number!`);
}

console.log(validateCreditNumber('a92332119c011112')); 
console.log(validateCreditNumber('4444444444444444')); 
console.log(validateCreditNumber('6666666666661666')); 
*/

