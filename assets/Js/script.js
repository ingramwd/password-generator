var generateBtn = document.querySelector("#generate");

var passwordLength = function () {

  var lengthConfirm = window.prompt(
    "How many characters would you like your password to be? Please pick between 8 and 128.");

  if (lengthConfirm < 8 || lengthConfirm > 128) {
    window.alert('Sorry but your password must be between 8 and 128! Try again!');
    passwordLength();

  }

}

var passLowCas = function () {

  var lowercase = window.confirm(
    "Confirm you would like the password to contain lowercase letters");

  if (lowercase === true) {
    window.alert('The password will contain lowercase letters!');
  }
  else {
    window.alert("The password will not contain lowercase letters");
  }
};

var passUpCas = function () {

  var uppercase = window.confirm(
    "Confirm you would like the password to contain Uppercase letters");

  if (uppercase === true) {
    window.alert('The password will contain Uppercase letters!');
  }
  else {
    window.alert("The password will not contain Uppercase letters");
  }
};

var numbers = function () {

  var num = window.confirm(
    "Confirm you would like the password to contain numbers");

  if (num === true) {
    window.alert('The password will contain numbers!');
  }
  else {
    window.alert("The password will not contain numbers");
  }
};

var special = function () {

  var specialChar = window.confirm(
    "Confirm you would like the password to contain special characters");

  if (specialChar === true) {
    window.alert('The password will contain special characters!');
  }
  else {
    window.alert("The password will not contain special characters");
  }
};

function generatePassword() {
  console.log("hey! You pressed the button");

  // 1.) Prompt the user for the password criteria
  // Password must be between 8 and 128 characters
  // Lowercase uppercase and special character options
  // 2.) Validate the users input 
  // for all prompts answered

  passwordLength();
  passLowCas();
  passUpCas();
  numbers();
  special();




  // Generate a password
  writePassword();



  // 4.)password is displayed onto the page
  return "Generated Password will go here";
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
