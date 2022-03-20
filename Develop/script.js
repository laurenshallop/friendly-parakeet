// Assignment code here
var generateBtn = document.querySelector("#generate");

// #generate password
function generatePassword(){
  // variables
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special =  ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


  var generateBtn = confirm("Password must include a length of 8-128 characters, with lowercase, uppercase, numeric or special characters.");
  console.log('generateBtn:'+ generateBtn);

  if (generateBtn) {

    var password_length = prompt("Choose a minimum of 8 characters but no more than 128.");
    console.log('password_length: ' + password_length);

    var password_criteria = [];

    if (Number.isInteger(parseInt(password_length))) {
      console.log('password_length is a number');

      if (parseInt(password_length) <129 && parseInt(password_length) > 7) {
        console.log('password_length matches');

        var include_lowercase = confirm("Do you want to include lowercase characters?");
        console.log('include_lowercase: ' + include_lowercase);

        var include_uppercase = confirm("Do you want to include uppercase characters?");
        console.log('include_uppercase: ' + include_uppercase);

        var include_numeric = confirm("Do you want to include numbers?");
        console.log('include_numeric: ' + include_numeric);

        var include_special = confirm("Do you want to include special characters?");
        console.log('include_special' + include_special);

        if (include_lowercase) {
          password_criteria = password_criteria.concat(lowercase);
          console.log('including lowercase in password_criteria');
        }

        if (include_uppercase) {
          password_criteria = password_criteria.concat(uppercase);
          console.log('including uppercase in password_criteria');
      }

        if (include_numeric) {
          password_criteria = password_criteria.concat(numeric);
          console.log('including numeric in password_criteria');
    }

       if (include_special) {
        password_criteria = password_criteria.concat(special);
        console.log('including special in password_criteria');
  }

      console.log("password_criteria: " + password_criteria);

      var password_string = "";

      for (var i = 0; i < parseInt(password_length); i++) {
        var num = Math.floor(Math.random() * password_criteria.length) + 1;
        console.log("num: " + num);

        var random_character = password_criteria[num];
        console.log('random character: ' + random_character);

        password_string += random_character;

        console.log('password_string: ' + password_string);
      }

      console.log('returning password_string as: ' + password_string);
      return password_string
  }
}

else {
  console.log("Incorrect");
  alert("Please use criteria to generate password");
  return("use the prompts");
  }
}


}

function  writePassword() {
  console.log('generatePassword function');
  var password = generateBtn();

  console.log('password returned from generatePassword as: ' + password);
  var passwordText = document.querySelector("#password");

  console.log('write the password value to the passwordText.value textarea');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




