const fs = require("fs");
const path = require("path");

//this function uses path.join, which is from the last section of instructions
fs.appendFile(path.join(__dirname, "text.txt"), "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful appendage!");
  } 
});

fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data, "Successfully read!");
  }
});

fs.writeFile(__dirname + "/text.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful rewritten!");
  } 
});

fs.rename(__dirname + "/text.txt", __dirname + "/somethingElse.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful renamed!");
  }
});

fs.unlink(__dirname + "/text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful unlinked!");
  }
});