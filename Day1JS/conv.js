// conversion of datatypes

let num = "24348932043"
// string to number
let NumberConv = Number(num)
console.log(NumberConv);

let store = null
let numConv = Number(store) // null gets converted to zero
console.log(numConv); 

// boolean to number
let boolr = true
let nConv = Number(boolr)
console.log(nConv);

// number to bool
let num1 = 1
let boole = Boolean(num1)
console.log(boole);

// string to boolean - if string is emply false, if string has some value it converts into true

let s = 'fsd'
let co = Boolean(s)
console.log(co);
let s1 = ''
let co1 = Boolean(s1)
console.log(co1);

// comparison

console.log("2" == 2)
console.log("2" === 2)






