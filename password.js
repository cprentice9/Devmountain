const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});




function welcomeUser () {
console.log('welcome to my password validator')
}
function promptUser() {
  reader.question("Choose a password    ", function(password){
    validatePasswordStrength(password)
    reader.close()
})
}

function validatePasswordStrength (password) {
	const isValidLength = password.length > 9
  if (isValidLength){
    console.log('success.')
  } else {
    console.log('This password is too short.')
  }
}

function startProgram() {
	welcomeUser()
  promptUser()
}

startProgram()