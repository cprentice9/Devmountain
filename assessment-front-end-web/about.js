console.log("hello world");

function mouseOverText(evt) {
	evt.preventDefault();
	alert("You're a cool cat!");
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert('The form has been submitted!');
}

let form = document.querySelector('form#contact');
let catImage = document.querySelector('img#catImage')

form.addEventListener('submit', handleSubmit);
catImage.addEventListener("mouseover", mouseOverText);