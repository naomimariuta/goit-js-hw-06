const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
	console.log(ingredient);
	const item = document.createElement("li");
	item.classList.add("item");
	item.textContent = ingredient;
	ingredientsList.append(item);
	console.log(item);
});
