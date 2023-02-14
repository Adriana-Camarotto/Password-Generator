//variable that stores the length of the password
var characterLength = 10;
//will store the caracters of the password in an array
var optionsArr = [];


// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  //this will ever reestart here
  optionsArr = [];

 //this will prompt the user for the length of the password
  characterLength = parseInt(prompt(`How long would you like your password to be? Please enter a number between 10 and 64`)); //NaN
  // length should be between 10 and 64 characters long
 
  if(isNaN(characterLength) || characterLength < 10 || characterLength > 64) { //it should be false
    alert("Please try again and enter a number between 10 and 64");
    return false;
  }
  // Present a series of prompts for password criteria 
  // Character types (uppercase, lowercase, numeric, and special characters)
  if (confirm("Do you want special characters?")) {
    optionsArr = optionsArr.concat(specialCharacters);
  }
  if (confirm("Do you want numeric characters?")) {
    optionsArr = optionsArr.concat(numericCharacters);
  }
  if (confirm("Do you want lowercase characters?")) {
    optionsArr = optionsArr.concat(lowerCasedCharacters);
  }
  if (confirm("Do you want uppercase characters?")) {
    optionsArr = optionsArr.concat(upperCasedCharacters);
  }
  return true;
  
}

//call the function
let options = getPasswordOptions(); 


// Function for getting a random element from an array
function getRandom(arr) {
  
}

// Function to generate password with user input
function generatePassword() {
  //cheking for user input
  //console.log("button was clicked!");
 


  




 
  // Code should validate for each input and at least one character type should be selected 
  // Once prompts are answered then the password should be generated and displayed in an alert or written to the page

  
  //testing if this function returns something or not
  return "Your password is: ";

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var correctPasswordOptions = getPasswordOptions() // this method should return true or false

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  if(correctPasswordOptions) {


  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);