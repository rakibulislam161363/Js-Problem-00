// Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.


function sumArray(arr) {
  return arr.reduce((total, num) => total + num);
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5



