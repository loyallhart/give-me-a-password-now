
let generateBtn = document.querySelector("#generate"); 

// Define a generatePassword() 
function generatePassword() {
 let userInput = window.prompt ("Enter your desired password legnth. It can be between 8 and 128 charaters");
 let includeLowerCase;
 let includeUpperCase;
 let includeNumeric;
 let includeSpecial;
 // set character range between 8 and 128 and window prompts for additional password criteria 
  if (userInput >= 8 && userInput <= 128) {
    includeLowerCase =  window.confirm ("Confirm if your password can include lowercase characters");
    includeUpperCase = window.confirm ("Confirm if your password can include include uppercase characters");
    includeNumeric = window.confirm ("Confirm if your password can includeinclude numeric characters");
    includeSpecial = window.confirm ("Confirm if your password can include include special characters");
  } 
  // if the user's input is outside of the set range then application will reset
  else {
    window.alert ("Please select a number between 8 and 128");
    return;
  }
// Logical AND operator to ensure that at least one character type is selected for the password generator
  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    window.alert("You must choose atleast one character type")};

// assign variables for character arrays
    let userConfirm = [];
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", "_", "{", "|", "}", "~"];

// use .concat to merge the arrays for character types selected by users into a new array
    if (includeLowerCase === true){
      userConfirm = userConfirm.concat(lowerCase);
    }

   if (includeUpperCase === true){
      userConfirm = userConfirm.concat(upperCase);
    }

   if (includeNumeric === true){
      userConfirm = userConfirm.concat(numeric);
    }

    if (includeSpecial === true){
      userConfirm = userConfirm.concat(specialCharacter);
    }

  // for loop to use the number of characters selected by the user
    let pw = [];

    for (let i =0; i < userInput; i++) {
      let pwGenerated = userConfirm[Math.floor(Math.random() * userConfirm.length)];
      pw.push(pwGenerated);

    }

  // convert the characters selected to a string to be written on the page

    let  convertedPw = pw.join("");
    return convertedPw
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);