const num = 1000

console.log(num.toString().charAt(2)) 

// toFixed method

let n = num.toFixed(2);
console.log(n);

// toPrecision method

let num1 = 123.2113
let n1 = num1.toPrecision(3) // 123
console.log(n1);

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// math

console.log(Math.min(13,4324,43));
let ni = Math.random()*10;
ni = Math.round(ni)
console.log(ni);

// to get a specific random number between two numbres

let min = 100;
let max = 200;

console.log(Math.floor(Math.random() * (max - min)));

