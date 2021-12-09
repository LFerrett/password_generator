// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define variable arrays for password characters 
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var theNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Prompt the user to enter number of characters the password should be
var userSize = prompt("How many characters do you want your password to be? (Enter a number between 8 and 128)");

// Turns the string inputted by the user into a number
var passwordLength = parseInt(userSize);

// Creates empty array for password
var randomPassword = [];

// If else to check to see that the password length the user picked is not 0, less than 8, or more than 128
if ((isNaN(passwordLength) === false) || (passwordLength > 8) || (passwordLength < 128)) {
  var userSpecial = confirm("Do you want to include special characters?");
  var userUpper = confirm("Do you want to include uppercase letters?");
  var userLower = confirm("Do you want to include lowercase letters?");
  var userNumber = confirm("Do you want to include numbers?");
} else {
  alert("The password needs to contain between 8 and 128 characters, please try again!");
}

// Run a funtion to take user inputs and add them to the randomPassword Array
function generatePassword() {
  if (userSpecial == true) {
    randomPassword = randomPassword.concat(specialCharacters);
    console.log(randomPassword);
  }
  if (userUpper == true) {
    randomPassword = randomPassword.concat(upperCase);
    console.log(randomPassword);
  }
  if (userLower == true) {
    randomPassword = randomPassword.concat(lowerCase);
    console.log(randomPassword);
  }
  if (userNumber == true) {
    randomPassword = randomPassword.concat(theNumbers);
    console.log(randomPassword);
  }
} 
generatePassword();

function finalPassword() {
  for (var i = 0; i < passwordLength.length; i++) {
    var cleanPassword = randomPassword[Math.floor(Math.random() * passwordLength.length)];
    console.log(cleanPassword);
   }
}
finalPassword();

// Function that writes password to the HTML code for copying
function writePassword() {
  var password = randomPassword;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// TRASH CODE GOES HERE
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

