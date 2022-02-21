// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// variables
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar =  "!@#$%^&*()_+<>~?/|\{}=;:'";

function writePassword() {

  var password ="";
  var passwordChar = "";
  var passwordLengthUser = prompt("How many characters would you like your password to contain? Must be between 8-128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);

  if (passwordLengthUser < 8) {
    alert("Password must have 8 characters or more!");
    return "";
  }

  if (passwordLengthUser > 128) {
    alert("Password must not have more than 128 characters");
    return "";
  }

  var lowercaseCharactersChoice = confirm("Do you want lowercase letters?");

  if (lowercaseCharactersChoice) {
    passwordChar += lowercaseChar;
  }

  var uppercaseCharacterChoice = confirm("Do you want uppercase letters?");

  if (uppercaseCharacterChoice) {
    passwordChar += uppercaseChar;

  }

  var numericalCharacterChoice = confirm("Do you want numbers?");

  if (numericalCharacterChoice) {
    passwordChar += numericalChar;
  }

  var specialCharacterChoice = confirm("Do you want special characters?");

  if (specialCharacterChoice) {
    passwordChar += specialChar;

  }

  for (var i = 0; i < passwordLengthUser; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








