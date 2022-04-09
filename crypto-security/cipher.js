const salt = {
  a: 76845,
  b: 25461,
  c: 36542,
  d: 21456,
  e: 41235,
  f: 14523,
  g: 14578,
  h: 47896,
  i: 41123,
  j: 92212,
  k: 10457,
  l: 11147,
  m: 12793,
  n: 13721,
  o: 14222,
  p: 15147,
  q: 12578,
  r: 17721,
  s: 18123,
  t: 13329,
  u: 20789,
  v: 22321,
  w: 22231,
  x: 23887,
  y: 24356,
  z: 25874,
};

function encryptString(string) {
  const toBeSalted = string.split("");
  const hash = [];
  toBeSalted.map((char) => {
    hash.push(salt[char]);
  });
  console.log(hash);
  return hash;
}

function decryptString(arr) {
  let decrypedValue = "";
  arr.map((num) => {
    decrypedValue += Object.keys(salt).find((key) => salt[key] === num);
  });
  console.log(decrypedValue);
  return decrypedValue;
}

console.log(encryptString("foo") !== "foo");
console.log(decryptString([14523, 14222, 14222]) === "foo");
