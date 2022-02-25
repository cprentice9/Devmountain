const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Do you like cats? y/n", function(answer) {
    if (answer == "y") {
      console.log("correct, cats are awesome");
    } else {
      console.log("that's incorrect, sorry");
    }
  });