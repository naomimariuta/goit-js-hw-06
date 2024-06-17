function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input[type=number]");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
	if (amount >= 1 && amount <= 100) {
		for (let i = 0; i < amount; i++) {
			boxes.insertAdjacentHTML(
				"beforeend",
				`<div style="width:${Math.floor(30 + 10 * i)}px; 
        height: ${Math.floor(30 + 10 * i)}px; 
        background-color:${getRandomHexColor()};
        margin-top: 1em"></div>`
			);
		}
	} else {
		alert("Introduceti un numar intre 1 si 100!");
	}
};

const creation = () => {
	boxes.innerHTML = null;
	createBoxes(inputNumber.value);
};

const destroyBoxes = () => {
	boxes.innerHTML = null;
	console.log("Distrugere perfecta ^_^");
};

createButton.addEventListener("click", creation);
destroyButton.addEventListener("click", destroyBoxes);
