const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  const ingredientList = ingredients.map(ingredient => {
    const listItem = document.createElement('li');
      listItem.textContent = ingredient;
    return listItem;
  })
  
  document.getElementById('ingredients').append(...ingredientList);