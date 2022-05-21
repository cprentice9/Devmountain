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

function isPangram(sentence) {
  let alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sentenceArr = sentence.replaceAll(" ", "").split("");
  sentenceArr.forEach((letter) => {
    remove(alphabetArr, letter);
  });
  return alphabetArr.length === 0;
}

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

function find_longest_word(wordList) {
  var wordLength = wordList.map(function (wordList) {
    return wordList.length;
  });
  wordLength = wordLength.sort((a, b) => b - a);
  return wordLength[0];
}

console.log(find_longest_word(["hi", "because", "hello"]));
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(addsToZero([1, 2, 3, -21, -3]));
console.log(hasUniqueChars("baboon"));
