function myFunction() {
  var elem = document.getElementById("chooseMe");
  var fortuneNum = elem.options[elem.selectedIndex].value;
  var fortuneMessage;
  console.log(fortuneNum);
  switch (Number(fortuneNum)) {
    case 1:
    case 6:
      fortuneMessage = "You will inherit a fortune.";
      break;
    case 2:
    case 7:
      fortuneMessage = "You will become a JavaScript Ninja.";
      break;
    case 3:
      fortuneMessage = "You will win a new car.";
      break;
    case 4:
    case 8:
      fortuneMessage = "A new computer will arrive at your house today.";
      break;

    default:
      fortuneMessage = "You have three hours to live so finish this course.";
  }

  document.getElementById("feedback").innerHTML = fortuneMessage;
}
