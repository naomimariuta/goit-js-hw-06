const form = document.querySelector(".login-form");

const handleSubmit = (e) => {
	e.preventDefault();
	const {
		elements: { email, password },
	} = e.currentTarget;
	if (email.value === "" || password.value === "") {
		alert("Toate campurile trebuie completate!");
	} else {
		const formElements = {
			email: email.value,
			password: password.value,
		};

		console.log(formElements);
	}
	e.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
