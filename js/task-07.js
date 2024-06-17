const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = "56px"; //media range-ului ca acolo vad ca se potioneaza input-ul ^_^

const fontSizeChanging = (e) => {
	spanText.style.fontSize = `${e.target.value}px`;
};

inputRange.addEventListener("input", fontSizeChanging);
