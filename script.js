// Assignment Code
//Global functions stay on top
var generateBtn = document.querySelector("#generate");
var uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var sepcialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "_",
  "=",
  "+",
];

var numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var selectedCharacters = [];
// Write password to the #password input
// This spits out the PW

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function passwordOptions() {
  var passwordLength = prompt(
    "How many characters would you like in your password?"
  );
  var useUppercase = confirm("Do you want uppercase characters?");
  var useLowercase = confirm("Do you want lowercase characters?");
  var useSpecialChar = confirm("Do you want special characters?");
  var useNumericalChar = confirm("Do you want numbers?");
  var optionsObject = {
    passwordLength, useUppercase, useLowercase, useSpecialChar, useNumericalChar
  }
  console.log(optionsObject)
  if (passwordLength < 8 || passwordLength > 128) {
  }
  return optionsObject
}

function generatePassword() {
  var options = passwordOptions()
  var guaranteeCharacters = []
if (options.useUppercase) {
  selectedCharacters = selectedCharacters.concat(uppercaseCharacters);
  guaranteeCharacters.push(setRandom(uppercaseCharacters))
}
if (options.useLowercase) {
  selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
  guaranteeCharacters.push(setRandom(lowercaseCharacters))
}
if (options.useSpecialChar) {
  selectedCharacters = selectedCharacters.concat(sepcialCharacters);
  guaranteeCharacters.push(setRandom(sepcialCharacters))
}
if (options.useNumericalChar) {
  selectedCharacters = selectedCharacters.concat(numberCharacters);
  guaranteeCharacters.push(setRandom(numberCharacters))
}
  console.log(guaranteeCharacters);
  var password = [];

  for (var i = 0; i < options.passwordLength; i++) {
    password.push(setRandom(selectedCharacters))
  }
  for (let i = 0; i < guaranteeCharacters.length; i++) {
    password[i] = guaranteeCharacters[i]
    
  }
  console.log(password)
  return password.join("")
}
//generatePassword()
//
function setRandom(arr) {
  var randomChar = Math.floor(Math.random() * arr.length)
  return arr[randomChar]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
