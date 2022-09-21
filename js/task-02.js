const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

function addIngredients(ingredients) {
	const listWithId = document.querySelector("ul#ingredients");

	ingredients.forEach(function (ingredient, index) {
		const createItemEl = document.createElement("li");
		createItemEl.textContent = `${ingredient}`;
		listWithId.append(createItemEl);
		createItemEl.classList.add("item");
	});

	return listWithId;
}

console.log(addIngredients(ingredients));
