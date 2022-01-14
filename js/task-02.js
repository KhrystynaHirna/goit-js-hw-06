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

const ingredientsList = ingredients.forEach((ingredient) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList = "item";
  ingredientsEl.append(ingredientsItem);
  console.log(ingredientsItem);
 
});


  
  





