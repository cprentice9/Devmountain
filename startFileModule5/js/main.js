// JavaScript Document

// var foundYou = document.getElementById("overview");
// console.log(foundYou);
// console.log(foundYou.innerText);
// foundYou.innerHTML = ">>I Changed You<<";

// var foundYou = document.getElementsByTagName("p");
// console.log(foundYou);
// console.log(foundYou[1].innerText);
// foundYou[1].innerText = ">>I Changed You<<";

// var foundYou = document.getElementsByName("description");
// console.log(foundYou[0].innerText);
// foundYou[0].innerHTML = ">>I Changed You<<";

// var foundYou = document.getElementsByClassName("smallCenter");
// console.log(foundYou[0].innerHTML);
// foundYou[0].innerHTML = ">>New Paragraph Info<<";

// var foundYou = document.querySelectorAll("ul#lp_list li");
// console.log(foundYou[0].innerText);
// console.log("LENGTH OF COLLECTION >> " + foundYou.length);
// foundYou[2].innerText = ">>I Changed You<<";

// var foundYou = document.getElementById("sw_list");
// console.log(foundYou);
// var childArray = foundYou.getElementsByTagName("li");
// console.log(childArray);
// childArray[0].innerText = ">>These Items<<";
// childArray[1].innerText = ">>Have Just<<";
// childArray[2].innerText = ">>Been Changed<<";

// var newOptions = ["Orange", "Red", "Blue"];
// var foundYou = document.getElementById("myForm");
// console.log(foundYou);
// var selectArray = foundYou.getElementsByTagName("option");
// console.log(selectArray);

// for (i = 0; i < selectArray.length; i++) {
//   selectArray[i].innerText = newOptions[i];
// }

var foundYou = document.getElementById("myForm");
console.log(foundYou);
var selectArray = foundYou.getElementsByTagName("input");
console.log(selectArray);

for (i = 0; i < selectArray.length; i++) {
  console.log(selectArray[i].value);
}
