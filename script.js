// Assignment code here
function generatePassword () {
  var length = 0;
  while ( length >128 || length <8) {
    length = prompt("type number between 8 and 128 characters");
    length = Number(length);
  }
  var lower="";
  while (lower!="s" && lower!="n") {
    lower = prompt("use lowercase? (s/n)");
  }
  var upper="";
  while (upper!="s" && upper!="n") {
    upper = prompt("use uppercase? (s/n)");
  }
  var special="";
  while (special!="s" && special!="n") {
    special = prompt("use special characters? (s/n)");
  }
  var number="";
  while (number!="s" && number!="n") {
    number = prompt("use number? (s/n)");
  }
  var password = "";
  for (let i=0; i<length; i++) {
    if (lower=="s") {
      password = password+"qwertyuiopasdfghjklzxcvbnm"[Math.floor(Math.random()*26)];
    }
    if (upper=="s") {
      password = password+"QWERTYUIOPASDFGHJKLZXCVBNM"[Math.floor(Math.random()*26)];
    }
    if (special=="s") {
      password = password+"!@#$%^&*()"[Math.floor(Math.random()*10)];
    }
    if (number=="s") {
      password = password+"1234567890"[Math.floor(Math.random()*10)];
    }
  }
  return password.substring(0,length);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
