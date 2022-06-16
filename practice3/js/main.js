// var i = 1;
// while (i <= 100) {
//   i = i + 2;
//   console.log(i);
//   i = i - 1;
//   console.log(i);
// }

// for (i = 100; i >= 1; i = i - 5) {
//   console.log(i);
// }

var elementID = document.getElementById("state");
console.log(elementID);

for (i = 0; i < elementID.length; i++) {
  console.log(elementID[i].text);
  console.log(elementID[i].value);
}
