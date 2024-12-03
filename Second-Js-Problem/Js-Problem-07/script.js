// Write a function to check if an array is empty. The function should take a single argument, which is the array.

function isArrayEmpty(arr) {
  return arr == "";
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false
