// Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.


function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return str.split('').reduce((count, char) => count + (vowels.includes(char) ? 1 : 0), 0);
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3
console.log(countVowels("aeiou"));