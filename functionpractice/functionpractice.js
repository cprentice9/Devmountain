function sumOfCubes(a, b) {
  console.log(a * a * a + b * b * b);
}
let x = 3;
sumOfCubes(x * 2, x * 4);

function countE() {
  let phrase = prompt("Which phrase would you like to examine?");
  if (typeof phrase != "string") {
    alert("That's not a valid entry!");
    return false;
  } else {
    let eCount = 0;
    for (let index = 0; index < phrase.length; index++) {
      if (phrase.charAt(index) == "e" || phrase.charAt(index) == "E") {
        eCount++;
      }
    }
    alert("There are " + eCount + " E's in \"" + phrase + '".');
    return true;
  }
}

countEButton.addEventListener("click", countE);

let c = 6;
let d = 4;

function add(a, b) {
  let c = a + b;
  console.log(c);
}

function subtract(a, b) {
  d = a - b;
  console.log(d);
}

add(12, 10);
subtract(12, 10);
