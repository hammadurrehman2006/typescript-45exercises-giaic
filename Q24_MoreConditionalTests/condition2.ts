// Tests for equality and inequality with strings
let string1: string = "hello";
let string2: string = "world";

console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
console.log(string1.toLowerCase() === string2.toLowerCase()); // False
console.log(string1.toLowerCase() !== string2.toLowerCase()); // True

// Numerical tests
let num1: number = 10;
let num2: number = 5;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False

// Tests using "and" and "or" operators
let isRaining: boolean = true;
let isSunny: boolean = false;

console.log(isRaining && isSunny); // False (both conditions must be true)
console.log(isRaining || isSunny); // True (one condition is true)

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits.indexOf('apple') !== -1); // True
console.log(fruits.indexOf('mango') !== -1); // False

// Test whether an item is not in an array
console.log(fruits.indexOf('pineapple') == -1); // True
console.log(fruits.indexOf('banana') == -1); // False
