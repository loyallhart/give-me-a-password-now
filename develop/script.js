
let generateBtn = document.querySelector("#generate"); 

// Define a generatePassword() 
function generatePassword() {
 let userInput = window.prompt ("Enter your desired password legnth. It can be between 8 and 128 charaters");
 let includeLowerCase;
 let includeUpperCase;
 let includeNumeric;
 let includeSpecial;
  if (userInput >= 8 && userInput <= 128) {
    includeLowerCase =  window.confirm ("Confirm if your password can include lowercase characters");
    includeUpperCase = window.confirm ("Confirm if your password can include include uppercase characters");
    includeNumeric = window.confirm ("Confirm if your password can includeinclude numeric characters");
    includeSpecial = window.confirm ("Confirm if your password can include include special characters");
  } 
  else {
    window.alert ("Please select a number between 8 and 128");
    return;
  }

  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    window.alert("You must choose atleast one character type")};

    let userConfirm = [];
    let lowerCase = ["a", "b", "c"];
    let upperCase = ["A", "B", "C"];
    let numeric = ["1", "2", "3"];
    let specialCharacter = ["!", "@" ,"#"];


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

    let pw = [];

    for (let i =0; i < userInput; i++) {
      let pwGenerated = userConfirm[Math.floor(Math.random() * userConfirm.length)];
      pw.push(pwGenerated);

    }

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