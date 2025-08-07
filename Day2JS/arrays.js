// declaring array
let arr = [1,2,3,4,5]
let arr1 = new Array(2,4,8,16)

// array methods
console.log(arr);
arr.push(100)
console.log(arr)
arr.pop(); // removes the last element

// unshift - lets you add any element at the beginning of the array
arr.unshift(1000);
console.log('A ', arr);
// shift - removes the first element from the array
arr.shift();
console.log('B ',arr)

// slice - returns the section of array
const ar = arr.slice(1,4);
console.log(ar);
console.log(arr);
// splice - removes the section of the array
const a = arr.splice(1,4);
console.log(a);
console.log(arr);

// arrays more functions
y1 = [1,"one"];
y2 = [2,"two"];
console.log(y1.concat(y2));

// flat - arrays inside arrays makes all the elements in a single array 

y3 = [y1,"ten", y2]
console.log(y3.flat());




