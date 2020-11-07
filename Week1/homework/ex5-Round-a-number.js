'use strict';
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);

if (a > z) {
    console.log(a)
}
else {
    console.log(z)
}

// or we can do this to creat a new variable

let highValue;
(a > z) ? highValue = a : highValue = z;
console.log(highValue);
