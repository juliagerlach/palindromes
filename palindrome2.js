"use strict"

//function palindrome(str) {
//   let regex = /[\W_]/g;
//   let lowRegStr = str.toLowerCase().replace(regex, '');
//   let reverseStr = lowRegStr.split('').reverse().join(''); 
//   if (reverseStr === lowRegStr) {
// 		return true;
// 		} 
// 		else {
// 			return false;
// 		}
// }
// palindrome("A man, a plan, a canal. Panama");

//mike's code

function getUserInput(question) {
    let response = prompt(question);
    return response;
}
// Reverse a string
function reverseAString(input) {
  let reversedUserInput = "";
  for(let i = input.length - 1; i >= 0; i--) {
    reversedUserInput += input.charAt(i);
    // reversedUserInput = reversedUserInput + input.charAt(i);
  }
  return reversedUserInput;
}
// let userInput = getUserInput("Please enter a word to be reversed:");
// let result = reverseAString(userInput);
// console.log('result', result);
// Check If Palindrome
function checkIfPalindrome() {
  let userInput = getUserInput("Please enter a word to check to see if it's a palindrome:");
  let backwardsWord = reverseAString(userInput);
  if(userInput === backwardsWord) {
    console.log(userInput + " is a palindrome!");
    return true;
  }
  else {
    console.log(userInput + " is NOT a palindrome!");
    return false;
  }
}
// checkIfPalindrome();