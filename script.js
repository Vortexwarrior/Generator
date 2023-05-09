// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate passsword (funtion declaration)
function generatePassword() {
  console.log("You clicked the button!");

  //  b. upperCase, lowerCase, numbers, & special characters
  var passLowerCase = "abcdefghjiklmnopqrstuvwxyz";
  var passUpperCase = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
  var passNumbers = ('1','2','3','4','5','6','7','8','9','0');
  var passSpecial = "!@#$%^&*()_+";
  var userchoice = [];
  var pass = "";
// options for password 
  var length = 
    prompt(
      "Choose the length of your password. Just pick a number between 8 and 128."
    );

  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Enter a number 8 thru 128");
    return null;
  }

  var passLowerCaseConfirm = confirm("Do you want to use lower case letters?");
  if (passLowerCaseConfirm === true) {
    userchoice += passLowerCase;
  }
  var passUpperCaseConfirm = confirm("Do you want to use upper case letters?");
  if (passUpperCaseConfirm === true) {
    userchoice += passUpperCase;
  }
  var passNumbersConfirm = confirm("Do you want to use numbers");
  if (passNumbersConfirm === true) {
    userchoice += passNumbers;
  }
  var passSpecialConfirm = confirm("Do you want to use special characters?");
  if (passSpecialConfirm === true) {
    userchoice += passSpecial;
  }

  if (
    passLowerCase === false &&
    passUpperCase === false &&
    passNumbers === false &&
    passSpecial=== false
  ) {
    alert("you have to pic at least one!");
    return "Try me again";
  }
// function for random password
  else {
    for (let i = 0; i < length; i++) {
      console.log(i);
      var random = Math.floor(Math.random() * userchoice.length);
      console.log(userchoice);
      pass += userchoice[random];
      console.log(pass);
    }
  }
  return pass;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
