console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert('The form has been submitted!');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);