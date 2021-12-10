// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines variable arrays for password characters 
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var theNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Captures what information the password should include in a function that prompts the user
// Checks to see if what the user inputted is a number and if it's between 8 and 128 characters
function generatePassword() {
  var userPass = "";
  let userSize = prompt("How many characters do you want your password to be? (Enter a number between 8 and 128)");
  if ((isNaN(userSize) === false) || (userSize > 8) || (userSize < 128)) {
    alert("Your password must contain between 8 and 128 characters. Please try again!")
    userSize = prompt("How many characters do you want your password to be? (Enter a number between 8 and 128)")
  }

// Prompts users for other characters in the password
  var userSpecial = confirm("Do you want to include special characters?");
  var userUpper = confirm("Do you want to include uppercase letters?");
  var userLower = confirm("Do you want to include lowercase letters?");
  var userNumber = confirm("Do you want to include numbers?");

// Turns the user input into a number
  userSize = parseInt(userSize);

// Runs a while loop that runs until the desired password length is created. It functions to check to see which characters are in the user selections, also adds those characters to the password, stops the code through a break if the criteria is met
while (userPass.length!==userSize) {
  if (userSpecial == true) {
    userPass = userPass + (specialCharacters[Math.floor(Math.random()*(specialCharacters.length-1))])
    console.log(userPass);
  } 
  if (userPass.length === userSize) {
    break;
  }
  if (userNumber == true) {
    userPass = userPass + (theNumbers[Math.floor(Math.random()*(theNumbers.length-1))])
    console.log(userPass);
  }
  if (userPass.length === userSize) {
    break;
  }
  if (userLower == true) {
    userPass = userPass + (lowerCase[Math.floor(Math.random()*(lowerCase.length-1))])
    console.log(userPass);
  }
  if (userPass.length === userSize) {
    break;
  }
  if (userUpper == true) {
    userPass = userPass + (upperCase[Math.floor(Math.random()*(upperCase.length-1))])
    console.log(userPass);
  }
  if (userPass.length === userSize) {
    break;
  }
 }
 return userPass;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 