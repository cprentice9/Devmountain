const answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - Definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

window.onload = function () {
  const eight = document.getElementById("eight");
  const answer = document.getElementById("answer");
  const eightball = document.getElementById("eight-ball");
  const question = document.getElementById("question");

  eightball.addEventListener("click", function () {
    if (question.value.length < 1) {
      alert("Please enter a question!");
    } else {
      eight.innerText = "";
      const num = Math.floor(Math.random() * Math.floor(answers.length));
      answer.innerText = answers[num];
    }
  });

  let eightballDisplayElem = document.querySelector(".eightball-display");
  let count = 0;

  updateDisplay();

  eightball.addEventListener("click", () => {
    count++;
    updateDisplay();
  });

  function updateDisplay() {
    eightballDisplayElem.innerHTML = count;
  }
};
