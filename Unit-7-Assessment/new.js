function addsToZero(arr) {
  let response = false;
  arr.forEach((num) => {
    for (let i = 0; i < arr.length; i++) {
      if (num + arr[i] === 0) {
        response = true;
      }
    }
  });

  return response;
}

function hasUniqueChars(word) {
  let response = true;
  const split_word = word.split("");
  split_word.forEach((letter, letterIndex) => {
    for (let i = 0; i < split_word.length; i++) {
      if (letterIndex != i) {
        if (letter === split_word[i]) {
          response = false;
        }
      }
    }
  });
  return response;
}

// console.log(addsToZero([1, 2, 3, -21, -3]));
console.log(hasUniqueChars("baboon"));
