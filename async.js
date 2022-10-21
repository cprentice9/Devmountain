let a = 1;
let b = 2;

setTimeout(function () {
  console.log("Timeout:" + a);
}, 100);

a = 10;

console.log("synchronous");

console.log(a);
console.log(b);
