let recipes = {};

const toggleRecipe = (e) => {
  const drinkName = e.target.textContent.trim();
  const recipeDiv = e.currentTarget.querySelector('.recipe');

  if (!recipeDiv) {
    const newRecipeDiv = document.createElement('div');
    newRecipeDiv.className = 'recipe';
    newRecipeDiv.textContent = recipes[drinkName] || 'Recipe not available..';
    e.currentTarget.appendChild(newRecipeDiv);
  } else {
    recipeDiv.style.display =
      recipeDiv.style.display === 'none' ? 'block' : 'none';
  }
};

const initializeApp = () => {
  const li = document.querySelectorAll('.drink-list ul li');

  li.forEach((item) => {
    item.addEventListener('click', toggleRecipe);
  });
};

const loadRecipes = async () => {
  try {
    const response = await fetch('./json/recipes.json');
    recipes = await response.json();

    initializeApp();
  } catch (error) {
    console.error('Failed to load recipes', error);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  await loadRecipes();
});
