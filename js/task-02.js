const ingredients =
  [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];
  
const ingredientsEl = document.querySelector(`#ingredients`);

const ingredientsList = ingredients.map((ingredient) => {
const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add("item");

  console.log(ingredientsItem);
  return ingredientsItem;
});
  
ingredientsEl.append(...ingredientsList);
console.log(ingredientsList);






