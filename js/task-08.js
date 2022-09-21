const formLoginPassword = document.querySelector("form.login-form");


formLoginPassword.addEventListener('submit', onFormLogin)

function onFormLogin (event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const mail = formElements.email.value;
	const password = formElements.password.value;

	if (mail === '' || password === '') {
			alert("Всі поля повинні бути заповнені.")
	}

	const formData = {
		mail,
		password,
	}

	console.log(formData);
	


	// const formData = new FormData(event.currentTarget);
	// formData.forEach((value, name) => {
	// const formDataNew = {
	// 		mail,
	// 		password,
	// 	} 
	// 	console.log(formDataNew); 
	// })

	

	event.currentTarget.reset();


}

