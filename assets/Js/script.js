var generateBtn = document.querySelector("#generate");
var allCharacters = "";




function generatePassword() {


  // 1.) Prompt the user for the password criteria
  // Password must be between 8 and 128 characters
  // Lowercase uppercase and special character options
  var length = window.prompt("Hello! how long would you like your password to be?");
  if (length < 8 || length > 128) {
    window.alert("Sorry please choose a number between 8 and 128");
    return
  }

  var numbers = window.confirm("Would you like to include numbers?")
  if (numbers) {
    var num = "1234567890";
    allCharacters = allCharacters.concat(num);
  }

  var lowercase = window.confirm("Would you like to include lowercase letters?")
  if (lowercase) {
    var lower = "abcdefghijklmnopqrstuvxyz";
    allCharacters = allCharacters.concat(lower);
  }


  var uppercase = window.confirm("Would you like to include uppercase letters?")
  if (uppercase) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVZXYZ";
    allCharacters = allCharacters.concat(upper);
  }

  var specialCharacters = window.confirm("Would you like to include Special Characters?")
  if (specialCharacters) {
    var spChar = "!@#$%^&*()-+=<>?,./";
    allCharacters = allCharacters.concat(spChar);
  }


  if (allCharacters === "") {
    window.alert("You need to have something in your Password!");
    return
  }
  // generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }


  // 4.)password is displayed onto the page
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
