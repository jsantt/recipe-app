import { Ingredient, Recipe, data } from './data.js';

let state: Recipe[] = data;

function setState(sta: Recipe[]) {
  state = sta;
}

function getState(): Recipe[] {
  return state;
}

function getRecipe(path: string): Recipe | undefined {
  return state.filter((recipe: Recipe) => recipe.path === path).at(0);
}

/* function getShoppingListRecipes() {
    return state.filter((recipe: Recipe) => {
        recipe.steps.includes(())
    })   
} */

function isInShoppingList(ingredient: Ingredient): boolean {
  return ingredient.inShoppingList;
}

function shoppingListItems(ingredients: Ingredient[]): Ingredient[] {
  return ingredients.filter((ingredient: Ingredient) =>
    isInShoppingList(ingredient)
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addtoShoppingList(ingredient: Ingredient) {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function removeFromShoppingList(ingredient: Ingredient) {}

export {
  addtoShoppingList,
  getRecipe,
  removeFromShoppingList,
  isInShoppingList,
  shoppingListItems,
  setState,
  getState,
};
