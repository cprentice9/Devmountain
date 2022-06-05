window.onload = function () {
  let answers = [];
  const eight = document.getElementById("eight");
  const answer = document.getElementById("answer");
  const eightball = document.getElementById("eight-ball");
  const question = document.getElementById("question");

  axios.get("http://localhost:4004/responses/").then((res) => {
    res.data.map((answer) => {
      answers.push(answer.body);
    });
  });

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
