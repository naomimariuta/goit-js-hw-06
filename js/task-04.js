const incrementingButton = document.querySelector('button[data-action="increment"]');
const decrementingButton = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");
let counter = counterValue.textContent;

incrementingButton.addEventListener("click", () => (counterValue.textContent = ++counter));

decrementingButton.addEventListener("click", () => (counterValue.textContent = --counter));
