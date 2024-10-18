// QUESTION ONE

function add(a, b) {
  return a + b;
}

// Example usage:
const result = add(5, 3);
console.log(result); // Output: 8

// QUESTION TWO

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero.");
//   }
//   return a / b;
// }

// // Example usage:
// try {
//   const result = divide(10, 2);
//   console.log(result); // Output: 5
// } catch (error) {
//   console.error(error.message);
// }

function divide(a, b) {
  return a / b;
}

console.log(divide(10, 10)); // output : 1

function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // Output: 6

// ASSIGNMENT 2(ARRAY METHOD)

// 1. push()
let fruits = ["apple", "banana"];
fruits.push("orange"); // Adds 'orange' to the end of the array
console.log(fruits); // ['apple', 'banana', 'orange']

// 2. pop()
let lastFruit = fruits.pop(); // Removes the last element ('orange') and returns it
console.log(lastFruit); // 'orange'
console.log(fruits); // ['apple', 'banana']

// 3. shift()
let firstFruit = fruits.shift(); // Removes the first element ('apple') and returns it
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana']

// 4. unshift()
fruits.unshift("mango"); // Adds 'mango' to the beginning of the array
console.log(fruits); // ['mango', 'banana']

// 5. slice()
let citrus = fruits.slice(0, 1); // Returns a shallow copy of the portion from index 0 to 1
console.log(citrus); // ['mango']

// 6. splice()
fruits.splice(1, 1, "kiwi"); // Removes 1 element at index 1 and adds 'kiwi'
console.log(fruits); // ['mango', 'kiwi']

// 7. map()
let lengths = fruits.map((fruit) => fruit.length); // Creates an array of lengths of each fruit name
console.log(lengths); // [5, 4] (lengths of 'mango' and 'kiwi')

// 8. filter()
let shortFruits = fruits.filter((fruit) => fruit.length < 6); // Returns fruits with names shorter than 6 characters
console.log(shortFruits); // ['kiwi']

// 9. forEach()
fruits.forEach((fruit) => console.log(fruit)); // Logs each fruit name
// Output:
// mango
// kiwi

// 10. reduce()
let totalLength = fruits.reduce((sum, fruit) => sum + fruit.length, 0); // Sums the lengths of all fruit names
console.log(totalLength); // 9 (5 + 4 for 'mango' and 'kiwi')
