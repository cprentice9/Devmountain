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

function showStuff(el) {
  var elementID = document.getElementById(el);
  for (i = 0; i < elementID.length; i++) {
    if (elementID[i].selected === true) {
      var x = elementID[i].text;
    }
  }
  return x;
}

function showMore(el) {
  var elementID = document.getElementsByName(el);
  // console.log(elementID.length);
  var myCheck = "";
  for (i = 0; i < elementID.length; i++) {
    // console.log(elementID[i].checked);
    // console.log(elementID[i].value);
    if (elementID[i].checked === true) {
      myCheck = myCheck + elementID[i].value + "<br>";
    }
  }

  return myCheck;
}

function evaluatePage() {
  var feedbackState = showStuff("state");
  var feedbackHome = showStuff("home");
  var feedbackLight = showMore("bulb");
  document.getElementById("output").innerHTML = feedbackState + "<br>" + feedbackHome + "<br>" + feedbackLight;
  showStuff("home");
}
