import { Ingredient, Recipe, data } from './data.js';

let state: Recipe[] = data;

function setState(sta: Recipe[]) {
  state = sta;
}

function getState(): Recipe[] {
  return state;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function addtoShoppingList(ingredient: Ingredient) {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function removeFromShoppingList(ingredient: Ingredient) {}

export { addtoShoppingList, removeFromShoppingList, setState, getState };
