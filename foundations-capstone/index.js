window.onload = function () {
  let answers = [];
  const eight = document.getElementById("eight");
  const answer = document.getElementById("answer");
  const eightball = document.getElementById("eight-ball");
  const question = document.getElementById("question");
  const submitResponseButton = document.getElementById("submitResponseButton");
  const getResponseButton = document.getElementById("getResponseButton");
  const customResponse = document.getElementById("customResponse");
  const responseTarget = document.getElementById("responseTarget");

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

  submitResponseButton.addEventListener("click", function () {
    console.log(customResponse.value);

    let body = {
      body: customResponse.value,
    };

    axios.post("http://localhost:4004/responses/", body).then(() => {
      axios.get("http://localhost:4004/responses/").then((res) => {
        answers = [];
        res.data.map((answer) => {
          answers.push(answer.body);
        });
      });
    });
  });

  getResponseButton.addEventListener("click", function () {
    axios.get("http://localhost:4004/responses/").then((res) => {
      res.data.map((answer) => {
        console.log(responseTarget);
        let responseCard = `<div><p>${answer.body} </p></div>`;
        responseTarget.innerHTML += responseCard;
        console.log(answer.body);
      });
    });
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
