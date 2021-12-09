// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define variable arrays for password characters 
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var userSize = prompt("How many characters do you want your password to be? (Enter a number between 8 and 128)");
var userSpecial = confirm("Do you want special characters?");
var userUpper = confirm("Do you want uppercase letters?");
var userLower = confirm("Do you want lowercase letters?");
var userNumber = confirm("Do you want to use numbers?");

var passwordLength = passwordLength = parseInt(userSize);

// Prompt the user to enter input and capture them in variables 
// function promptUser() {
//   var userSize = prompt("How many characters do you want your password to be? (Enter a number between 8 and 128)");
//   console.log(userSize);
//   var passwordLength = parseInt(userSize);
//   console.log(passwordLength);
//   var userSpecial = confirm("Do you want special characters?");
//   var userUpper = confirm("Do you want uppercase letters?");
//   var userLower = confirm("Do you want lowercase letters?");
//   var userNumber = confirm("Do you want to use numbers?");
//   if (passwordLength < 0) {
//     alert("Please choose the correct amount of characters to continue!");
//   } else if (passwordLength > 128) {
//     alert("Please choose the correct amount of characters to continue!");
//   } else {
//     console.log(promptUser.passwordLength, promptUser.userSpecial, promptUser.userUpper, promptUser.userLower, promptUser.userNumber)
//   }
// }

// Create password with user inputs

function generatePassword() {
console.log(passwordLength, userSpecial, userUpper, userLower, userNumber)
}
generatePassword();

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
