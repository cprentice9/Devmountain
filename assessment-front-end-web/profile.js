console.log("hello world");

function colorClick(evt) {
	evt.preventDefault();
	alert("Yellow is my Favorite Color");
}

function placeClick(evt) {
	evt.preventDefault();
	alert("Bald Head Island is my Favorite Place");
}

function ritualClick(evt) {
	evt.preventDefault();
	alert("Listening to Music and Coding is my Favorite Ritual");
}

let color = document.querySelector('button#color');
let place = document.querySelector('button#place');
let ritual = document.querySelector('button#ritual');
color.addEventListener("click", colorClick);
place.addEventListener("click", placeClick);
ritual.addEventListener("click", ritualClick);