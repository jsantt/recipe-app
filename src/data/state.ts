import { Ingredient, Recipe, data } from './data.js';

let state: Recipe[] = data;

function setState(sta: Recipe[]) {
  state = sta;
}

function getRecipe(path: string): Recipe | undefined {
  return state.filter((recipe: Recipe) => recipe.path === path).at(0);
}

function isInShoppingList(ingredient: Ingredient): boolean {
  return ingredient.inShoppingList === true;
}

function shoppingListItems(ingredients: Ingredient[]): Ingredient[] {
  return ingredients.filter((ingredient: Ingredient) =>
    isInShoppingList(ingredient)
  );
}

export { getRecipe, isInShoppingList, shoppingListItems, setState };
