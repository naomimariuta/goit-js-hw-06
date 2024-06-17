const inputText = document.querySelector("#validation-input");
const validation = (e) => {
	if (e.currentTarget.value.length === Number(inputText.dataset.length)) {
		inputText.classList.add("valid");
		inputText.classList.remove("invalid");
	} else {
		inputText.classList.add("invalid");
		inputText.classList.remove("valid");
	}
};
inputText.addEventListener("blur", validation);
