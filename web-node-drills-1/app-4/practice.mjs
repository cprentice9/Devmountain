import fs from "fs";
import path from "path";

fs.appendFile( "./web-node-drills-1/app-4/text.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  } 
});

fs.readFile("./web-node-drills-1/app-4/text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFile("./web-node-drills-1/app-4/text.txt", "Hello World", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  } 
});

fs.rename("./web-node-drills-1/app-4/text.txt", "./web-node-drills-1/app-4/somethingElse.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});

// example with path.join()
fs.unlink(path.join(".", "node-drills-part-1", "app-4", "text.txt"), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});