function isPalindrome(word) {
  // Write your algorithm here
  reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}

/* 
  Add your pseudocode here
  1. Reverse the word and save the results in a variable
  2. Compare the reversed word and the original word
  3. Return the result of the comparison
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
